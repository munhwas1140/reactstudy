import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "XXX",
        comment: "안녕하세요",
    },
    {
        name: "XXX",
        comment: "리액트 배우고 싶어요",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
                })}
        </div>
    )
}

export default CommentList;