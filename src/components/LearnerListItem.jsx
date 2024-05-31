import PropTypes from "prop-types";
import { useState } from 'react';
import ScoresList from "./ScoresList";



function LearnerListItem({ learner }) {
    const [scoreState, setScoreState] = useState(learner.scores);
 
  return (
    <div>
        <h5>name : {learner.name}</h5>
        <h5>bio : {learner.bio}</h5>
        <ScoresList scores={scoreState} />
        <hr/>
        

      
      
    </div>
  );
}

LearnerListItem.propTypes = {
    learner: PropTypes.obj,
};

export default LearnerListItem;