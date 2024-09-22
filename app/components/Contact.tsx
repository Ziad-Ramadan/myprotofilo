import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <main className="flex flex-col md:flex-row w-full max-w-[1440px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-2/4 p-6">
          <form>
            <h1 className="text-3xl font-semibold mb-6">Contact</h1>
            <section className="w-full">
              <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
                <div>
                  <label htmlFor="fname">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    required
                    className="border rounded-lg w-full p-2"
                    placeholder="First Name"
                  />
                  <br /> <br />
                </div>
                <div>
                  <label>
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    required
                    className="border rounded-lg w-full p-2"
                    placeholder="Last Name"
                  />
                  <br /> <br />
                </div>
              </div>

              <div>
                <label>
                  Email Address<span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded-lg w-full p-2"
                  placeholder="Email"
                />
                <br /> <br />
              </div>
              <div>
                <label>
                  Phone<span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  required
                  type="number"
                  id="Phone"
                  name="Phone"
                  className="border rounded-lg w-full p-2"
                  placeholder="Phone"
                />
                <br /> <br />
              </div>
              <label>
                Message:<span className="text-red-500">*</span>
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="border w-full p-2 rounded-lg"
                required
              ></textarea>
              <br /> <br />
            </section>
            <input
              className="bg-[#0c4a7d] w-full p-2 rounded-lg text-white"
              type="submit"
              value="Submit"
              required
            />
          </form>
        </div>

        <div className="md:w-1/3 p-6  flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/ziad-ramadan-kamel/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-[#0c7d69] hover:text-[#0a5b4d] transition duration-300" />
            </a>
            <a href="https://github.com/ZeyadRamadan26" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-[#0c4a7d] hover:text-[#0a375c] transition duration-300" />
            </a>

          </div>
        </div>
      </main>
    </div>
  )
}
