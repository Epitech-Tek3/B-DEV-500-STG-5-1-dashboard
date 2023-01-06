/// <reference types="@types/segment-analytics" />

declare global {
  interface Window {
    analytics: SegmentAnalytics.AnalyticsJS;
    zE: any;
    snaptr: any;
    Trustpilot: any;
  }
  // eslint-disable-next-line no-var
  var zE: any;
}

export const page = (url: string) => {
  if (typeof window !== "undefined") window.analytics.page(url);
};

export const track = (name: string, properties?: object) => {
  if (typeof window !== "undefined") window.analytics.track(name, properties);
};

export const reset = () => {
  if (typeof window !== "undefined") window.analytics.reset();
};

// analytics.identify([userId], [traits], [options], [callback]);
export const identify = (userId: string) => {
  if (typeof window !== "undefined") window.analytics.identify(userId);
};
