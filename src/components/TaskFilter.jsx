export default function TaskFilter({ currentFilter, onChangeFilter }) {
  return (
    <div className="task-filter">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onChangeFilter('all')}
      >
        All
      </button>

      <button
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => onChangeFilter('active')}
      >
        Active
      </button>

      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => onChangeFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}