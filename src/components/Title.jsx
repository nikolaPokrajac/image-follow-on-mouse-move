const Title = ({ title, author, setActiveIndex, index }) => {
  return (
    <div
      className='project-item'
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <h4 className='project-author'>
        <span>{author}</span>
      </h4>
      <h3 className='project-title'>
        <span>{title}</span>
      </h3>
    </div>
  );
};

export default Title;
