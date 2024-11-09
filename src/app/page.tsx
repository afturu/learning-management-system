// src/app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Best selling courses section */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-semibold">Best selling courses in Web Development</h2>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="course-card p-4">
              <Image src="/sample-course.jpg" alt="Course Image" width={200} height={100} />
              <h3 className="mt-2">Sample Course Title</h3>
              <p className="text-gray-500">by Instructor Name</p>
              <p className="mt-1 text-orange-500 font-semibold">$57</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular instructors section */}
      <section className="px-6 py-8 bg-gray-100">
        <h2 className="text-2xl font-semibold">Popular instructors in Web Development</h2>
        <div className="grid grid-cols-5 gap-6 mt-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="instructor-card">
              <Image src="/sample-instructor.jpg" alt="Instructor Image" width={100} height={100} className="rounded-full" />
              <h3 className="mt-2 font-semibold">Instructor Name</h3>
              <p className="text-gray-500">Web Developer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Course list section */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-semibold">Courses</h2>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="course-card p-4">
              <Image src="/sample-course.jpg" alt="Course Image" width={200} height={100} />
              <h3 className="mt-2">Sample Course Title</h3>
              <p className="text-gray-500">by Instructor Name</p>
              <p className="mt-1 text-orange-500 font-semibold">$35</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer section */}
      <footer className="px-6 py-8 bg-gray-900 text-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">Start learning with 67.1k students around the world.</h2>
            <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">Join The Family</button>
          </div>
          <div className="quick-links flex space-x-8">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul>
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Download Our App</h3>
              <div className="footer-icons flex space-x-2 mt-2">
                <Image src="/app-store.svg" alt="App Store" width={40} height={40} />
                <Image src="/play-store.svg" alt="Play Store" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}