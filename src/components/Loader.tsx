interface LoaderProps {
  color?: string;
  isOnLight: boolean;
}
const Loader: React.FC<LoaderProps> = ({ color, isOnLight }) => {
  return (
    <div>
      <div
        className={`lds-ellipsis hover:${!isOnLight && (color = "#181818")}`}
      >
        <div
          style={{
            background: color,
          }}
        />
        <div
          style={{
            background: color,
          }}
        />
        <div
          style={{
            background: color,
          }}
        />
        <div
          style={{
            background: color,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
