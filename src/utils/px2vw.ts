interface Px2vw {
  (size: number, width?: number): string;
}

const px2vw: Px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export default px2vw;
