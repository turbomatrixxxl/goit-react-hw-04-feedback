import Buttons from './Buttons';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: '#f5f5f5',
      }}
    >
      <Buttons />
    </div>
  );
};
