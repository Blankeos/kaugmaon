interface LoaderProps {
  color?: string;
}
const Loader: React.FC<LoaderProps> = ({ color = "#dbff00" }) => {
  return (
    <div>
      <div className="lds-ellipsis">
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
