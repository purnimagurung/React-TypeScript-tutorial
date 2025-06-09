const FoodMenu = () => {
  const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <img
            key={index}
            className="h-auto max-w-full rounded-lg"
            src={url}
            alt={`Project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
