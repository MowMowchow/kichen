import React, { Component } from 'react';
import HttpServiceClass from '..//../services/http-services';
import './new-listing.css';
let httpService = new HttpServiceClass();


class NewListing extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    var data = {};
    const old = new FormData(event.target);
    old.forEach(function (value, key) {
      data[key] = value;
    });
    var json = JSON.stringify(data);
    var obj = JSON.parse(json);
    httpService.postItem(obj);
  };

  render() {
    return (

      <div className="button-storage">
        <h1 class="new-title">Create new post</h1>
        <div className="row">
          <div className="button-block">
            <form onSubmit={this.handleSubmit} className="new-input">
              <div className=" col-12">
                <label for="title">Title</label>
                <input name="title" class="long-input" id="title" type="text" placeholder="Beans and rice . . ." />
              </div>

              <div className="row move-row">


                <div className="col-6">

                  <label for="price">Price</label>

                  <div class="input-group mb-3 icon-group">

                

                    <input name="price" class="short-input" id="price" type="text" placeholder="0.00" />
                    
                    

                  </div>


                </div>

                <div className="col-6">
                  <label for="servings"># of Servings</label>
                  <input name="servings" class="short-input" id="servings" type="text" placeholder="0" />
                </div>

              </div>


              <div className="row move-row">
                <div className="col-8">
                  <label for="location">Location</label>
                  <input name="location" class="long-input" id="location" type="text" placeholder="Texas" />
                </div>

                <div className="col-4">
                  <label for="ready_time">Ready by:</label>
                  <input name="ready_time" class="short-input" id="ready_time" type="text" placeholder="00:00" />
                </div>
              </div>


              <div className="col-12">
                <label for="ingredients">Ingredients</label>
                <textarea name="ingredients" id="ingredients" type="textarea" placeholder="Flour, eggs, nutmeg, sugar . . ." />
              </div>


              <div className="col-12">
                <label for="description">Description</label>
                <textarea name="description" id="description" type="textarea" placeholder="This dish is a scrumptious part of . . ." />
              </div>


              <div className="col-6 submit-button-div justify-content-end">
                <button className="submit-button">Submit</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    );
  }
}



export default NewListing;
