import React from "react"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xgenokgd"
        method="POST"
      >
        <label for="name">
          <h3>name</h3>
          <br />
          <input type="name" name="name" />
        </label>

        <br />
        <label for="email">
          <h3>email</h3>
          <br />
          <input type="email" name="_replyto" />
        </label>

        <br />
        <input type="hidden" name="_subject" value="From portfolio site" />
        <label for="subject">
          <h3>message</h3>
          <br />
          <textarea id="subject" name="subject" style={{height:"100px"}}/>
        </label>
        <br />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="btn">Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
