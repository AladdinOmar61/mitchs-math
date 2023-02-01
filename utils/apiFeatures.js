class APIFeatures {
    constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
    }
  
    filter() {
      //Filtering
      const queryObj = {...this.queryString};
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach(el => delete queryObj[el]);
      
          //Advanced Filtering
          let queryStr = JSON.stringify(queryObj);
          queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
          console.log(JSON.parse(queryStr))
      
          //{ name: "Algebra I" price: { $gte: 100 } }
          
          //on postman it should look like: 127.0.0.1:3000/?name=Algebra I&price[gte]=5
          //lecture 96 advance filtering for more details/refresher, code doesnt apply to this project
          // gte, gt, lte, lt
  
          this.query = this.query.find(JSON.parse(queryStr));
  
          // let query = await Program.find(queryObj);
          return this;
    }
  
    sort() {
          // Sorting
      //I think this only works for number values for now
      if(this.queryString.sort) {
        const sortBy = this.queryString.sort.split(',').join(' ');
        console.log(sortBy);
        this.query = this.query.sort(sortBy);
        // sorting by more than one critera postman: 127.0.0.1:3000/?sort=price,ratingsAverage
        // sort('price ratingsAverage)
      } else {
        this.query = this.query.sort('-createdAt');
      }
      return this;
    }
  
    limitFields() {
      // Field Limiting
      //postman: fields=name,duration,etc.
  
      if(this.queryString.fields) {
        const fields = this.queryString.fields.split(',').join(' ');
        this.query = this.query.select(fields);
      } else {
        // query = query.select('-__v');
        //keeping the above commented out because it is excluding all fields
        //for some reason.
      }
      return this;
    }
  
    //Skipped pagination
  
  }

  module.exports = APIFeatures;