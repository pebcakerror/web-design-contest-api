import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-gray-800 font-sans">
      <header className='border-b-2 border-gray-200 pb-2'>
        <h1 className="text-3xl font-bold text-gray-900 pb-2">
          Web Design & Development Contest 
        </h1>

        <h2 className="text-xl font-semibold mb-2">2025 State Competition</h2>
      </header>
      
      <section className='mt-8'>
        <h2 className="text-xl font-semibold mb-2">Planning and Process</h2>
        <p className='mb-4'>
          Some things the judges be looking for:
        </p>
        <ul className='list-disc pl-5'  >
          <li>Demonstrate an understanding of:
            <ul className='list-disc pl-5'>
              <li>Users</li>
              <li>User Goals, vs Business Goals</li>
              <li>Wireframming as a planning tool</li>
              <li>User Journeys</li>
            </ul>
          </li>
          <li>Soft skills and client interaction</li>
        </ul>
      </section>

      <section className='mt-8'>
        <h2 className="text-xl font-semibold mb-2">
          Coding Environment
        </h2>
        <p>
          Familiarize yourself with the coding environment: <a href="https://www.screencast.com/t/bX1fZBcWvs" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://www.screencast.com/t/bX1fZBcWvs</a>
        </p>
      </section>
      
      <section className='mt-8'>
        <h2 className="text-xl font-semibold mb-2">HTML & CSS</h2>
        <p className='mb-4'>
        All teams are provided with the same layout to ensure consistency for the judges to evaluate. You must implement the basic layout structure as defined in the wireframes but you will have freedom over the aesthetics (see next section)
        </p>
        
        <p className='mb-4'>
        Some things the judges be looking for:
        </p>

        <ul className='list-disc pl-5'  >
          <li>HTML is well structured and uses appropriate semantics</li>
          <li>CSS is separate from the HTML</li>
          <li>CSS is structured for scalability, and reusability</li>
          <li>Considering using a system such as B.E.M.</li>
          <li>Folder and file structure demonstrates, filenames, and linking assets demonstrates a basic understanding of servers</li>
        </ul>
      </section>

      <section className='mt-8'>
        <h2 className="text-xl font-semibold mb-2">
          Design & Aesthetics
        </h2>
        <p className='mb-4'>
          All teams are provided with the same layout to ensure consistency for the judges to evaluate. You must implement the basic layout structure as defined in the wireframes (see previous section) but you will have freedom over the aesthetics.
        </p>

        <p className='mb-4'>
          Some things the judges be looking for:
        </p>
        
        <ul className='list-disc pl-5 mb-4'  >
          <li>Colors, fonts and other aesthetic choices are pleasing and appropriate for the client.</li>
          <li>Use of spacing, border, and font sizing easily separates or joins sections appropriately</li>
          <li>Spacing is consistent, not necessarily exactly matching across sections, but creates a ‘vertical rhythm’ </li>
        </ul>

        <p className='mb-4'>
          The client has provided some photos to use. You must use them, however you are free to modify them to match the aesthetic direction you wish to achieve. For instance, if the client has provided a crisp clean photo, but your aesthetic direction calls for a grungy look, you are free to modify the provided photos with an overlay, distortion, border, or other treatments.
        </p>

        <p className='mb-0'>
          You are free to use additional resources from the internet beyond what the client has provided to achieve your aesthetic direction.
        </p>
        <p className='mb-0'>
          You are not allowed to simply search Google images and download whatever you like.
        </p>
        <p className='mb-0'>
          You must use resources with appropriate open licenses. 
        </p>
        <p className='mb-0'>
          <a href="https://github.com/reinaldosimoes/design-resources" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://github.com/reinaldosimoes/design-resources</a> is an excellent list of resources with various open licenses. The list is long. Here is a more curated list of recommendations:
        </p>

        <ul className='list-disc pl-5'  >
          <li>
            <a href="https://fonts.google.com/" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://fonts.google.com/</a>
          </li>
          <li>
            <a href="https://unsplash.com/" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://unsplash.com/</a>
          </li>
          <li>
            <a href="https://pixabay.com/" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://pixabay.com/</a>
          </li>
          <li>
            <a href="https://getwaves.io/" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://getwaves.io/</a>
          </li>
          <li>
            <a href="https://www.toptal.com/designers/subtlepatterns" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://www.toptal.com/designers/subtlepatterns</a> 
          </li>
        </ul>
        
      </section>

      <section className='mt-8'>
        <h2 className="text-xl font-semibold mb-2">
          JavaScript Challenge
        </h2>
        <p className='mb-4'>
          Some things the judges be looking for:
        </p>
        <ul className='list-disc pl-5'  >
          <li>Javascript is in a separate file</li>
          <li>Method and variable names are reasonably self-descriptive or code comments to add clarity</li>
          <li>Well structured with future maintainability in mind. </li>
          <li>DOM manipulation</li>
          <li>Working with APIs
            <ul className='list-disc pl-5'>
              <li>Fetch is not explicitly required but recommended: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target='_blank' rel='noopener noreferrer' className="text-blue-600 underline">https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch</a></li>
            </ul>
          </li>

        </ul>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p>
            <strong>GET</strong> <a href="/events" className="bg-gray-100 px-2 py-1 rounded font-mono text-blue-600 underline">/events</a> - Get a list of upcoming events (<a href="/swagger" target='_blank' className="inline-block text-blue-600 underline">API Documentation</a>)  
          </p>
      </div>
      </section>
    </div>
  );
};

export default HomePage; 