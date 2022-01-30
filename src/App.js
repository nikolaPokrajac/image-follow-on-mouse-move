import { useState, useEffect } from 'react';
import './App.scss';
import sampleData from './utils/sampleData';
import Title from './components/Title';
import Media from './components/Media';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMomusePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', updateMomusePosition);

    return () => window.removeEventListener('mousemove', updateMomusePosition);
  }, []);

  return mousePosition;
};

const App = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { x, y } = useMousePosition();

  return (
    <div className='container'>
      <div className='project-list'>
        {sampleData.map(({ title, author }, index) => (
          <Title
            title={title}
            author={author}
            setActiveIndex={setActiveIndex}
            index={index}
            key={title}
          />
        ))}
      </div>
      <div className='project-media'>
        {sampleData.map(({ mediaUrl }, index) => {
          const isActive = index === activeIndex;
          const xPos = isActive ? x : 0;
          const yPos = isActive ? y : 0;
          return (
            <Media
              url={mediaUrl}
              active={isActive}
              x={xPos}
              y={yPos}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
