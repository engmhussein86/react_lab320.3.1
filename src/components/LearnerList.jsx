import PropTypes from "prop-types";
import LearnerListItem from "./LearnerListItem";

function LearnerList({ learners }) {
  const learnerJSX = learners.map((item,index) => (
    <LearnerListItem learner={item} key={index} />
  ));

  return (
    <div>
      <h2 style={{textDecoration: "underline"}}>Learner List</h2>

      {learnerJSX}
      
    </div>
  );
}

LearnerList.propTypes = {
    learners: PropTypes.array,
};

export default LearnerList;