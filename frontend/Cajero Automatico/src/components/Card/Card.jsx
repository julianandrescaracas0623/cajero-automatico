  import PropTypes from "prop-types";

  const Card = ({ title, image, link }) => {
    return (
      <>
        <a
          onClick={link}
          className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 w-full max-w-xs md:max-w-sm lg:max-w-md transform transition-transform hover:scale-105"
        >
          <img
            className="object-cover w-full h-48 rounded-t-lg"
            src={image}
            alt="Mostrar Saldo"
          />
          <div className="flex flex-col p-4 leading-normal text-center">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </div>
        </a>
      </>
    );
  };

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.func,
  };

  export default Card;
