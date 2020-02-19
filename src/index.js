import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import luffy from './71EK2xl-2SL._SL1000_.png'
import dragon from './Monkey_D._Dragon_Anime_Infobox.png';
import graph from './Monkey_D._Garp_Anime_Infobox.png';
const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                Test test
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Monkey D. luffy" 
                timeAgo="today" 
                content="kkkk1" 
                avatar={luffy}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Monkey D. Dragon" 
                timeAgo="yesterday" 
                content="kkkk2" 
                avatar={dragon}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Monkey D. Graph" 
                timeAgo="tomorrow" 
                content="kkkk3" 
                avatar={graph}
            />
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));