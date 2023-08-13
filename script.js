let tl = gsap.timeline({
  repeat: -1,
});
tl.to(
  ".imageConatiner",
  {
    width: "100%",
    esae: Expo.easeInOut,
    // duration: 2,
    stagger: 2,
  },
  "a"
)
  .to(
    ".text h1",
    {
      esae: Expo.easeInOut,

      stagger: 2,
      top: 0,
    },
    "a"
  )
  .to(
    ".text h1",
    {
      esae: Expo.easeInOut,
      delay: 2,
      stagger: 2,
      top: "-100%",
    },
    "a"
  );
