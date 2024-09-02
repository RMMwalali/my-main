export function constructMetadata({
  title = "Greater Kenya Organisation",
  description = "We are The Greater Kenya Organisation, a visionary NGO committed to enacting sustainable solutions and empowering young individuals to achieve financial stability. Our multifaceted projects address diverse challenges, ranging from education to entrepreneurship, aiming to create a positive and lasting impact on the community. Join Greater Kenya, and become an integral part of these initiatives, contributing to the transformation of lives and communities.",
  image = "https://res.cloudinary.com/dtnbwgpca/image/upload/v1724709935/GKO/vrmjlvfuxbnmiccmjnqh.png",
  icons = "https://res.cloudinary.com/dtnbwgpca/image/upload/v1724709890/GKO/vrxkeupavmmiw3liq0wg.jpg",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@rmmwalali",
    },
    icons,
    metadataBase: new URL("https://maitai.vercel.app/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
