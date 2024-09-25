function BlogPost(props) {
  return (
    <div className="BlogPost">
      <img src={props.img} alt="Placeholder Banner" className="banner-image" />

      <h3>{props.title}</h3>
      <div class="info-container">
        <div class="info-item">Author: {props.author} </div>
        <div class="info-item">Date: {props.date}</div>
        <div class="info-item">Estimated Reading Time: {props.readingTime}</div>
        <div class="info-item">Likes: {props.likes}</div>
      </div>
      <p>{props.text}</p>
    </div>
  );
}

export default BlogPost;
