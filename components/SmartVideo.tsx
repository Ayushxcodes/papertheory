"use client";

import React, { forwardRef } from "react";

export type SmartVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  mobileSrc?: string;
};

const SmartVideo = forwardRef<HTMLVideoElement, SmartVideoProps>(
  ({ mobileSrc, src, ...props }, ref) => {
    return (
      <video ref={ref} {...props}>
        {mobileSrc && (
          <source
            src={mobileSrc}
            media="(max-width: 768px)"
            type="video/webm"
          />
        )}

        {/* Ensure src is string before passing to <source> */}
        {typeof src === "string" && <source src={src} type="video/webm" />}
      </video>
    );
  }
);

SmartVideo.displayName = "SmartVideo";

export default SmartVideo;
