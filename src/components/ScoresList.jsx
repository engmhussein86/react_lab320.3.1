import PropTypes from "prop-types";


function ScoresList({ scores }) {


  return (
    <div>
      <h2>Scores:</h2>
      {scores.map((item,index)=>(
       <div className="score">
       <p>Date: {item.date} === Score: {item.score}</p>
        </div>
      ))}
    </div>
  );
}

ScoresList.propTypes = {
    learners: PropTypes.array,
};

export default ScoresList;