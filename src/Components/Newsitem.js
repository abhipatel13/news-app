import React, { Component } from 'react';
import './newsStyle.css'
export default class Newsitem extends Component {
    render() {

        // let {title,description,imageUrl,newsUrl} = this.props;
        return (
          <div className='container my-5'>
              <div class="card">
  <img src={this.props.imageUrl} class="card-img-top" alt="..." style={{height:'140px'}}/>
  <div class="card-body">
    <h5 class="card-title">{this.props.title}
    </h5>
    <p class="card-text">{this.props.description}</p>
    <a href={this.props.newsUrl} target="_blank" className="btn btn-primary">Read More</a><br/>
    <p class="card-text"><small class="text-muted">By {this.props.author} | Last updated {new Date(this.props.time).toGMTString()} mins ago</small></p>
  </div>
</div>
          </div>
        )
    }
}