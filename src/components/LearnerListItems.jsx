import PropTypes from 'prop-types'; 
;

function LearnerListItem({learners}) {
    return (
        <div>Name: {learners.name}</div>,
        <div>Bio: {learners.bio} </div>,
        <div>Scores: {learners.scores}</div>
    )
}

LearnerListItem.propTypes = {
    learners: PropTypes.object
}

export default LearnerListItem;