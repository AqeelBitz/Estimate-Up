import React from 'react';
import { Link } from 'react-router-dom';

const Sloc = () => {
  function calc(e) {
    e.preventDefault();
    var a, b, c, S;

    a = Number(document.getElementById('askfp').value);
    b = document.getElementById('language_factor');
    c = b.options[b.selectedIndex].value;
    S = a * c;
    document.getElementById('result_sloc').value = S;
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 t_name">Source Lines of Code (SLOC) Calculator</h1>
      <form>
        <div className='sloc_separate_item'>
          <div className="form-group row items mb-2">
            <label htmlFor="askfp" className="col-sm-3 col-form-label">FUNCTION POINT:</label>
            <div className="col-sm-8">
              <input type="text" id="askfp" className="form-control" />
            </div>
          </div>
          <div className="form-group row items mb-1">
            <label htmlFor="language_factor" className="col-sm-3 col-form-label">LANGUAGE USED:</label>
            <div className="col-sm-8">
              <select name="list" id="language_factor" className="form-control">
                <option value="null">Language</option>
                <option value="97">C</option>
                <option value="53">JAVA</option>
                <option value="50">C++</option>
                <option value="46">J2EE</option>
                <option value="61">COBOL</option>
                <option value="54">C#</option>
                <option value="34">HTML</option>
                <option value="57">.NET</option>
                <option value="37">ORACLE</option>
                <option value="21">SQL</option>
              </select>
            </div>
          </div>
          <small className="form-text text-muted">
            **The language factors used for the calculation are taken on the basis of average value.
          </small>
          <div className="sloc-buttons">
            <div className="col-sm-5">
              <button className=" mr-3 align-self-center sloc_btn" type="submit" onClick={calc}>
                Calculate SLOC
              </button>
            </div>
            <div className="col-sm-5">
              <input type="text" id="result_sloc" className="form-control  sloc_input" readOnly />
            </div>
          </div>

          <div className="nav-buttons">
            <Link to="/cocomo" className="btn btn-danger mr-2">
              <i className="fas fa-arrow-left mr-2"></i>Go Back
            </Link>
            <Link to="/estimate" className="btn btn-primary mr-3">
              Estimate Effort, Time, Cost
              <i className="fas fa-arrow-right ml-3"></i>
            </Link>
          </div>

        </div>






      </form>
    </div>
  );
};

export default Sloc;
