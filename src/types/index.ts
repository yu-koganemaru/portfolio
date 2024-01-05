// ページトランジション
export interface Title {
  upper: string;
  lower: string|null;
}
// カバー画像用
export interface CorverStyles {
  backgroundImage: string;
  top: string;
  left: string;
  height: string;
  width: string;
}

// カバー画像用
export interface CorverStylesObj {
  thumbnailPath: string;
  styles: {
    top: string;
    left: string;
    height: string;
    width: string;
  };
}


