"use client";

import { PointerEvent, useState } from "react";

const INITIAL_PUPIL = { x: 0, y: 0 };
const PUPIL_LIMIT = 16;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

const cardTags = ["Placeholder", "Pastel Mood", "Edit Freely"];

export function AboutCharacterCard() {
  const [pupilOffset, setPupilOffset] = useState(INITIAL_PUPIL);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;
    const pointerY = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2 - 40;
    const deltaX = pointerX - centerX;
    const deltaY = pointerY - centerY;
    const distance = Math.hypot(deltaX, deltaY) || 1;
    const limitedDistance = Math.min(distance, PUPIL_LIMIT);
    const ratio = limitedDistance / distance;

    setPupilOffset({
      x: clamp(deltaX * ratio, -PUPIL_LIMIT, PUPIL_LIMIT),
      y: clamp(deltaY * ratio, -PUPIL_LIMIT, PUPIL_LIMIT),
    });
  }

  function handlePointerLeave() {
    setPupilOffset(INITIAL_PUPIL);
  }

  return (
    <article className="mx-auto w-full max-w-[27rem] rounded-none border-4 border-[#7a886c] bg-[#fbfdf8] shadow-card">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-none bg-[linear-gradient(180deg,#e8f2dc_0%,#f9fcf4_54%,#edf6e3_100%)]"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="absolute inset-x-7 bottom-40 top-7 rounded-none border-[8px] border-[#fbfdf8]" />
        <div className="absolute left-1/2 top-[30%] flex -translate-x-1/2 gap-5">
          {[0, 1].map((eye) => (
            <div
              key={eye}
              className="relative h-24 w-24 rounded-full bg-[#fff4ec] shadow-[inset_0_-8px_0_rgba(0,0,0,0.03)] sm:h-28 sm:w-28"
            >
              <span
                className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e1714] transition-transform duration-75"
                style={{
                  transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-[#fbfdf8] px-6 py-6 text-[#2a1d18]">
          <p className="text-[2.8rem] font-black leading-none tracking-tight">#E8F2DC</p>
          <p className="mt-2 text-2xl font-medium">Your Name Here</p>
          <p className="mt-1 text-base text-[#5f4a42]">Personal Intro Card</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {cardTags.map((tag) => (
              <span
                key={tag}
                className="rounded-none border-2 border-[#7a886c] bg-[#f2f8eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7b916d]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#7a6258]">Short one-line intro goes here.</p>
        </div>
      </div>
    </article>
  );
}


