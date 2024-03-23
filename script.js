var tl = gsap.timeline();

tl.from("#nav h3, #nav h2, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.3,
})
tl.from("#main h1",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.3,
})
tl.from("#main img",{
    scale:0,
    opacity:0,
    stagger:0.3,
})
tl.from("#scroll",{
    scale:0,
    opacity:0,
})
tl.to("#scroll",{
    y:40,
    repeat:-1,
    duration:0.8,
    yoyo:true,
})