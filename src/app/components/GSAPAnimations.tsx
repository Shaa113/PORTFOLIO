import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

// ─── Utility: split text into lines/chars ─────────────────────────────────────
function splitIntoLines(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return null;
  return new SplitText(el, { type: "lines,chars", linesClass: "split-line" });
}

export function GSAPAnimations() {
  useGSAP(() => {
    // ── 1. HERO PAGE-ENTER ANIMATION ─────────────────────────────────────────
    const heroTl = gsap.timeline({ delay: 3.4 }); // after PageLoader

    // Hero name: clip-path wipe from below, char stagger
    const heroH1 = document.querySelector("#home h1");
    if (heroH1) {
      const split = new SplitText(heroH1, {
        type: "chars",
        charsClass: "hero-char",
      });
      gsap.set(split.chars, { yPercent: 110, opacity: 0 });
      heroTl.to(
        split.chars,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.04,
        },
        0
      );
    }

    // Hero subtitle — slide up
    const heroSub = document.querySelector("#home p");
    if (heroSub) {
      gsap.set(heroSub, { y: 30, opacity: 0 });
      heroTl.to(
        heroSub,
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        0.5
      );
    }

    // Hero social icons — stagger in
    const heroSocials = document.querySelectorAll("#home .flex.items-center.justify-center.gap-4 > a");
    if (heroSocials.length) {
      gsap.set(heroSocials, { y: 20, opacity: 0 });
      heroTl.to(
        heroSocials,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
        },
        0.75
      );
    }

    // Hero buttons
    const heroBtns = document.querySelectorAll("#home .flex.flex-col.sm\\:flex-row > a");
    if (heroBtns.length) {
      gsap.set(heroBtns, { y: 20, opacity: 0 });
      heroTl.to(
        heroBtns,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        0.9
      );
    }

    // Hero separator line — draw from left
    const heroLine = document.querySelector(".hero-separator");
    if (heroLine) {
      gsap.set(heroLine, { scaleX: 0, transformOrigin: "left center" });
      heroTl.to(
        heroLine,
        { scaleX: 1, duration: 1.2, ease: "power3.inOut" },
        0.4
      );
    }

    // Hero brand logo
    const heroBrand = document.querySelector("#home .absolute.top-8.left-8");
    if (heroBrand) {
      gsap.set(heroBrand, { x: -30, opacity: 0 });
      heroTl.to(
        heroBrand,
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.2
      );
    }

    // ── 2. SECTION CLIP-PATH TEXT REVEALS (ScrollTrigger) ─────────────────────
    const sectionHeadings = document.querySelectorAll<HTMLElement>(
      "#about h2, #projects h2, #process h2, #contact h2"
    );

    sectionHeadings.forEach((el) => {
      const split = new SplitText(el, {
        type: "lines",
        linesClass: "reveal-line",
      });

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.display = "block";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);

        gsap.set(line, { y: "105%", opacity: 0 });
        gsap.to(line, {
          y: "0%",
          opacity: 1,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    // Section label (small caps above heading)
    const sectionLabels = document.querySelectorAll<HTMLElement>(
      "#about > div > div > div > p:first-child, #projects .pt-28 p:first-child, #process > div > div > div > p:first-child, #contact > div > div > div > p:first-child"
    );

    sectionLabels.forEach((el) => {
      gsap.set(el, { x: -20, opacity: 0 });
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── 3. SCROLL-DRAWN HORIZONTAL LINES ──────────────────────────────────────
    // Draw the top separator line in each section as user scrolls in
    const sectionDividers = document.querySelectorAll<HTMLElement>(
      ".section-draw-line"
    );

    sectionDividers.forEach((el) => {
      gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(el, {
        scaleX: 1,
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── 4. PROJECT CARDS — animations handled by Motion useScroll in ProjectShowcase ─
    // (Removed — Motion's useScroll blur/scale/opacity drives card reveal natively)


    // ── 5. SKILLS TAGS — WAVE STAGGER ─────────────────────────────────────────
    const skillTags = document.querySelectorAll<HTMLElement>(
      "#about .flex.flex-wrap.gap-2 span"
    );

    if (skillTags.length) {
      gsap.set(skillTags, { scale: 0.8, opacity: 0, y: 12 });
      gsap.to(skillTags, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.5)",
        stagger: { amount: 0.6, from: "start" },
        scrollTrigger: {
          trigger: skillTags[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // ── 6. TIMELINE / EXPERIENCE ITEMS — STAGGER FROM LEFT ───────────────────
    const expItems = document.querySelectorAll<HTMLElement>(
      "#process .group.relative.pl-10"
    );

    expItems.forEach((item, i) => {
      gsap.set(item, { x: -40, opacity: 0 });
      gsap.to(item, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.08,
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── 7. TIMELINE VERTICAL LINE — DRAW DOWN ON SCROLL ──────────────────────
    const timelineLine = document.querySelector<HTMLElement>(
      "#process .absolute.left-0.top-0.bottom-0.w-px"
    );
    if (timelineLine) {
      gsap.set(timelineLine, { scaleY: 0, transformOrigin: "top center" });
      gsap.to(timelineLine, {
        scaleY: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: timelineLine,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
    }

    // ── 8. CONTACT FORM ITEMS — STAGGER SLIDE UP ─────────────────────────────
    const contactItems = document.querySelectorAll<HTMLElement>(
      "#contact .space-y-6 > div, #contact .space-y-6 > button"
    );

    if (contactItems.length) {
      gsap.set(contactItems, { y: 30, opacity: 0 });
      gsap.to(contactItems, {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: contactItems[0],
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }

    // ── 9. FOOTER — FADE UP ────────────────────────────────────────────────────
    const footerChildren = document.querySelectorAll<HTMLElement>(
      "footer > div > div"
    );

    footerChildren.forEach((el, i) => {
      gsap.set(el, { y: 24, opacity: 0 });
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── 10. Project image parallax handled by Motion in ProjectShowcase ────────
    // (Removed to avoid conflicts with Motion's horizontal scroll driver)


    // ── 11. SCROLLING NUMBER COUNTER IN HERO ─────────────────────────────────
    // Floating horizontal scroll marquee speed boost on scroll
    const marqueeTrack = document.querySelector<HTMLElement>(".marquee-track");
    if (marqueeTrack) {
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const extra = gsap.utils.clamp(0.5, 4, 1 + Math.abs(velocity) / 800);
          gsap.to(marqueeTrack, {
            "--marquee-speed-mult": extra,
            duration: 0.4,
            ease: "power1.out",
            overwrite: true,
          });
        },
      });
    }

    // ── 12. MAGNETIC HOVER for CTA buttons ────────────────────────────────────
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.3;
        const dy = (e.clientY - cy) * 0.3;
        gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: "power2.out" });
      };
      const handleMouseLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
      };
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
