import { useState, useMemo } from 'react';
import { DATABASE_ENTRIES, PLATFORM_MAP, TACTIC_MAP, type DatabaseEntry } from '../../data/databaseEntries';
import './DatabaseSection.css';

export function DatabaseSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [tacticFilter, setTacticFilter] = useState('all');

  const filteredData = useMemo(() => {
    return DATABASE_ENTRIES.filter(entry => {
      const matchesSearch = searchTerm === '' ||
        entry.alias.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.tactics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        entry.redflags.some(r => r.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesPlatform = platformFilter === 'all' ||
        PLATFORM_MAP[entry.platform] === platformFilter;

      const matchesTactic = tacticFilter === 'all' ||
        entry.tactics.some(t => TACTIC_MAP[t] === tacticFilter);

      return matchesSearch && matchesPlatform && matchesTactic;
    });
  }, [searchTerm, platformFilter, tacticFilter]);

  const stats = useMemo(() => ({
    total: DATABASE_ENTRIES.length,
    active: DATABASE_ENTRIES.filter(e => e.status === 'active').length,
    reported: DATABASE_ENTRIES.filter(e => e.status === 'reported').length,
    banned: DATABASE_ENTRIES.filter(e => e.status === 'banned').length,
  }), []);

  return (
    <section id="database" className="database-section">
      <div className="section-header">
        <span className="section-tag">[02]</span>
        <h2 className="section-title glitch" data-text="PREDATOR PATTERNS DATABASE">
          PREDATOR PATTERNS DATABASE
        </h2>
        <p className="section-desc">
          Documented behavioral patterns reported by the community. Help us identify and stop predators.
        </p>
      </div>

      <div className="database-stats">
        <div className="stat-item">
          <span className="stat-number">{stats.total}</span>
          <span className="stat-label">Total Entries</span>
        </div>
        <div className="stat-item active">
          <span className="stat-number">{stats.active}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-item reported">
          <span className="stat-number">{stats.reported}</span>
          <span className="stat-label">Under Investigation</span>
        </div>
        <div className="stat-item banned">
          <span className="stat-number">{stats.banned}</span>
          <span className="stat-label">Banned</span>
        </div>
      </div>

      <div className="database-controls">
        <div className="search-container">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search patterns, aliases, platforms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-container">
          <select
            className="filter-select"
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
          >
            <option value="all">All Platforms</option>
            <option value="social">Social Media</option>
            <option value="gaming">Gaming</option>
            <option value="messaging">Messaging Apps</option>
            <option value="forums">Forums</option>
          </select>
          <select
            className="filter-select"
            value={tacticFilter}
            onChange={(e) => setTacticFilter(e.target.value)}
          >
            <option value="all">All Tactics</option>
            <option value="trust">Trust Building</option>
            <option value="isolation">Isolation</option>
            <option value="gifts">Gift Giving</option>
            <option value="secrets">Secret Keeping</option>
          </select>
        </div>
      </div>

      <div className="database-table-container">
        <table className="database-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ALIAS</th>
              <th>PLATFORM</th>
              <th>PRIMARY TACTICS</th>
              <th>RED FLAGS</th>
              <th>STATUS</th>
              <th>RISK</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={7} className="no-results">
                  No entries match your search criteria.
                </td>
              </tr>
            ) : (
              filteredData.map((entry, index) => (
                <TableRow key={entry.id} entry={entry} index={index} />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="database-notice">
        <span className="notice-icon">ℹ</span>
        <p>
          <strong>Have information?</strong> If you recognize any patterns or have additional 
          information about suspicious behavior, <a href="#report">submit a report</a>. 
          All submissions are forwarded to appropriate authorities.
        </p>
      </div>
    </section>
  );
}

function TableRow({ entry, index }: { entry: DatabaseEntry; index: number }) {
  return (
    <tr style={{ animationDelay: `${index * 0.05}s` }}>
      <td className="id-cell">{entry.id}</td>
      <td className="alias-cell">{entry.alias}</td>
      <td>
        <span className="platform-badge">{entry.platform}</span>
      </td>
      <td>
        <div className="tactics-list">
          {entry.tactics.map(tactic => (
            <span key={tactic} className="tactic-tag">{tactic}</span>
          ))}
        </div>
      </td>
      <td>
        <ul className="redflags-list">
          {entry.redflags.map((flag, i) => (
            <li key={i}>{flag}</li>
          ))}
        </ul>
      </td>
      <td>
        <span className={`status-badge ${entry.status}`}>
          {entry.status.toUpperCase()}
        </span>
      </td>
      <td>
        <span className={`risk-badge ${entry.risk}`}>
          {entry.risk.toUpperCase()}
        </span>
      </td>
    </tr>
  );
}
