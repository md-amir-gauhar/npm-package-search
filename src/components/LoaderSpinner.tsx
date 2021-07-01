import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderSpinner: React.FC = () => {
  return (
    <div className="loader">
      <Loader
        type="Circles"
        color="Gray"
        height={200}
        width={200}
        timeout={4000}
      />
    </div>
  );
};

export default LoaderSpinner;
