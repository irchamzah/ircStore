const SocialMediaSection = () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto max-w-7xl text-center'>
        <div className='container mx-auto px-6 text-center lg:px-0'>
          <h2 className='mb-6 text-2xl font-bold text-gray-800'>
            Ikuti Kami di Media Sosial
          </h2>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {/* Instagram Embed */}
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <h3 className='mb-3 text-lg font-semibold text-gray-700'>
                Instagram
              </h3>
              <iframe
                className='h-[400px] w-full rounded-lg'
                src='https://www.instagram.com/p/DGFVSDkPZ__/embed'
                frameBorder='0'
                allowFullScreen
              ></iframe>
            </div>

            {/* TikTok Embed */}
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <h3 className='mb-3 text-lg font-semibold text-gray-700'>
                TikTok
              </h3>
              <blockquote
                className='tiktok-embed'
                cite='https://www.tiktok.com/@irc.store_'
                data-video-id='7288344177716925739'
              >
                <iframe
                  className='h-[400px] w-full rounded-lg'
                  src='https://www.tiktok.com/embed/7471530138144951557'
                  frameBorder='0'
                  allowFullScreen
                ></iframe>
              </blockquote>
            </div>

            {/* YouTube Embed */}
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <h3 className='mb-3 text-lg font-semibold text-gray-700'>
                YouTube
              </h3>
              <iframe
                className='h-[400px] w-full rounded-lg'
                src='https://www.youtube.com/embed/S-K8hqX49cg'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
