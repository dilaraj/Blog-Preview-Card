import React from "react";
import '../global.css';
import img from "../assets/images/illustration-article.svg";
import profPic from "../assets/images/image-avatar.webp";

function BlogPost() {
    return (
        <div className="blog-container">
            <div className="img-container">
                <img src={img} alt="blog post illustration" />
            </div>

            <div className="blog-body">
                <div className="status-container">
                    <div className="status-btn">
                        Learning
                    </div>
                </div>
                <div className="pub-date">
                    Published 21 Dec 2023
                </div>
                <div className="blog-caption">
                    <div className="blog-header">HTML & CSS foundations</div>
                    <div className="blog-text">
                        These languages are the backbone of every website, defining structure, content, and presentation.
                    </div>
                </div>
                <div className="blog-user">
                    <img src={profPic} alt="Profile avatar" className="user-img"/>
                    <div className="user-name">Greg Hooper</div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;