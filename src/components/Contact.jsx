const Contact = () => {
  return (
    <section className="form">
      <div className="row">
        <div className="col-md-6">
          <h1>Send me a message</h1>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                className="form-control"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
