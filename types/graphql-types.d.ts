export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
  format?: InputMaybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  gatsbyImageData?: Maybe<Scalars['GatsbyImageData']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  url?: Maybe<Scalars['String']>;
  placeholderUrl?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  filesize?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type RemoteFileFit =
  | 'COVER'
  | 'FILL'
  | 'OUTSIDE'
  | 'CONTAIN';

export type RemoteFileFormat =
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES';

export type RemoteFileLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'TRACED_SVG'
  | 'NONE';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulStartbild = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  bild?: Maybe<ContentfulAsset>;
  text?: Maybe<ContentfulStartbildTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulStartbildSys>;
  /** Returns all children nodes filtered by type contentfulStartbildTextTextNode */
  childrenContentfulStartbildTextTextNode?: Maybe<Array<Maybe<ContentfulStartbildTextTextNode>>>;
  /** Returns the first child node of type contentfulStartbildTextTextNode or null if there are no children of given type on this node */
  childContentfulStartbildTextTextNode?: Maybe<ContentfulStartbildTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulStartbildCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulStartbildUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulStartbildSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulStartbildSysContentType>;
};

export type ContentfulStartbildSysContentType = {
  sys?: Maybe<ContentfulStartbildSysContentTypeSys>;
};

export type ContentfulStartbildSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlog = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  beschreibung?: Maybe<ContentfulBlogBeschreibungTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogSys>;
  /** Returns all children nodes filtered by type contentfulBlogBeschreibungTextNode */
  childrenContentfulBlogBeschreibungTextNode?: Maybe<Array<Maybe<ContentfulBlogBeschreibungTextNode>>>;
  /** Returns the first child node of type contentfulBlogBeschreibungTextNode or null if there are no children of given type on this node */
  childContentfulBlogBeschreibungTextNode?: Maybe<ContentfulBlogBeschreibungTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlogCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulBlogSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogSysContentType>;
};

export type ContentfulBlogSysContentType = {
  sys?: Maybe<ContentfulBlogSysContentTypeSys>;
};

export type ContentfulBlogSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulKontakt = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  beschreibung?: Maybe<ContentfulKontaktBeschreibungTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulKontaktSys>;
  /** Returns all children nodes filtered by type contentfulKontaktBeschreibungTextNode */
  childrenContentfulKontaktBeschreibungTextNode?: Maybe<Array<Maybe<ContentfulKontaktBeschreibungTextNode>>>;
  /** Returns the first child node of type contentfulKontaktBeschreibungTextNode or null if there are no children of given type on this node */
  childContentfulKontaktBeschreibungTextNode?: Maybe<ContentfulKontaktBeschreibungTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulKontaktCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulKontaktUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulKontaktSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulKontaktSysContentType>;
};

export type ContentfulKontaktSysContentType = {
  sys?: Maybe<ContentfulKontaktSysContentTypeSys>;
};

export type ContentfulKontaktSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSchwerpunkte = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  beschreibung?: Maybe<ContentfulSchwerpunkteBeschreibungTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSchwerpunkteSys>;
  /** Returns all children nodes filtered by type contentfulSchwerpunkteBeschreibungTextNode */
  childrenContentfulSchwerpunkteBeschreibungTextNode?: Maybe<Array<Maybe<ContentfulSchwerpunkteBeschreibungTextNode>>>;
  /** Returns the first child node of type contentfulSchwerpunkteBeschreibungTextNode or null if there are no children of given type on this node */
  childContentfulSchwerpunkteBeschreibungTextNode?: Maybe<ContentfulSchwerpunkteBeschreibungTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSchwerpunkteCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulSchwerpunkteUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulSchwerpunkteSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSchwerpunkteSysContentType>;
};

export type ContentfulSchwerpunkteSysContentType = {
  sys?: Maybe<ContentfulSchwerpunkteSysContentTypeSys>;
};

export type ContentfulSchwerpunkteSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulUebermich = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  bild?: Maybe<ContentfulAsset>;
  text?: Maybe<ContentfulUebermichTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulUebermichSys>;
  /** Returns all children nodes filtered by type contentfulUebermichTextTextNode */
  childrenContentfulUebermichTextTextNode?: Maybe<Array<Maybe<ContentfulUebermichTextTextNode>>>;
  /** Returns the first child node of type contentfulUebermichTextTextNode or null if there are no children of given type on this node */
  childContentfulUebermichTextTextNode?: Maybe<ContentfulUebermichTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulUebermichCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulUebermichUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulUebermichSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulUebermichSysContentType>;
};

export type ContentfulUebermichSysContentType = {
  sys?: Maybe<ContentfulUebermichSysContentTypeSys>;
};

export type ContentfulUebermichSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulTermin = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  button1?: Maybe<Scalars['String']>;
  button2?: Maybe<Scalars['String']>;
  button3?: Maybe<Scalars['String']>;
  beschreibung?: Maybe<ContentfulTerminBeschreibungTextNode>;
  button?: Maybe<ContentfulTerminButtonTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTerminSys>;
  /** Returns all children nodes filtered by type contentfulTerminButtonTextNode */
  childrenContentfulTerminButtonTextNode?: Maybe<Array<Maybe<ContentfulTerminButtonTextNode>>>;
  /** Returns the first child node of type contentfulTerminButtonTextNode or null if there are no children of given type on this node */
  childContentfulTerminButtonTextNode?: Maybe<ContentfulTerminButtonTextNode>;
  /** Returns all children nodes filtered by type contentfulTerminBeschreibungTextNode */
  childrenContentfulTerminBeschreibungTextNode?: Maybe<Array<Maybe<ContentfulTerminBeschreibungTextNode>>>;
  /** Returns the first child node of type contentfulTerminBeschreibungTextNode or null if there are no children of given type on this node */
  childContentfulTerminBeschreibungTextNode?: Maybe<ContentfulTerminBeschreibungTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulTerminCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulTerminUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulTerminSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTerminSysContentType>;
};

export type ContentfulTerminSysContentType = {
  sys?: Maybe<ContentfulTerminSysContentTypeSys>;
};

export type ContentfulTerminSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogpost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  datum?: Maybe<Scalars['Date']>;
  bild?: Maybe<ContentfulAsset>;
  text?: Maybe<ContentfulBlogpostTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogpostSys>;
  /** Returns all children nodes filtered by type contentfulBlogpostTextTextNode */
  childrenContentfulBlogpostTextTextNode?: Maybe<Array<Maybe<ContentfulBlogpostTextTextNode>>>;
  /** Returns the first child node of type contentfulBlogpostTextTextNode or null if there are no children of given type on this node */
  childContentfulBlogpostTextTextNode?: Maybe<ContentfulBlogpostTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlogpostDatumArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogpostCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogpostUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulBlogpostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogpostSysContentType>;
};

export type ContentfulBlogpostSysContentType = {
  sys?: Maybe<ContentfulBlogpostSysContentTypeSys>;
};

export type ContentfulBlogpostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSchwerpunktepost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  reihenfolge?: Maybe<Scalars['Int']>;
  bild?: Maybe<ContentfulAsset>;
  text?: Maybe<ContentfulSchwerpunktepostTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSchwerpunktepostSys>;
  /** Returns all children nodes filtered by type contentfulSchwerpunktepostTextTextNode */
  childrenContentfulSchwerpunktepostTextTextNode?: Maybe<Array<Maybe<ContentfulSchwerpunktepostTextTextNode>>>;
  /** Returns the first child node of type contentfulSchwerpunktepostTextTextNode or null if there are no children of given type on this node */
  childContentfulSchwerpunktepostTextTextNode?: Maybe<ContentfulSchwerpunktepostTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSchwerpunktepostCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulSchwerpunktepostUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulSchwerpunktepostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSchwerpunktepostSysContentType>;
};

export type ContentfulSchwerpunktepostSysContentType = {
  sys?: Maybe<ContentfulSchwerpunktepostSysContentTypeSys>;
};

export type ContentfulSchwerpunktepostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAnfahrt = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  beschreibung?: Maybe<ContentfulAnfahrtBeschreibungTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnfahrtSys>;
  /** Returns all children nodes filtered by type contentfulAnfahrtBeschreibungTextNode */
  childrenContentfulAnfahrtBeschreibungTextNode?: Maybe<Array<Maybe<ContentfulAnfahrtBeschreibungTextNode>>>;
  /** Returns the first child node of type contentfulAnfahrtBeschreibungTextNode or null if there are no children of given type on this node */
  childContentfulAnfahrtBeschreibungTextNode?: Maybe<ContentfulAnfahrtBeschreibungTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAnfahrtCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAnfahrtUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulAnfahrtSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnfahrtSysContentType>;
};

export type ContentfulAnfahrtSysContentType = {
  sys?: Maybe<ContentfulAnfahrtSysContentTypeSys>;
};

export type ContentfulAnfahrtSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLeistungen = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  beschreibung?: Maybe<ContentfulLeistungenBeschreibungTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLeistungenSys>;
  /** Returns all children nodes filtered by type contentfulLeistungenBeschreibungTextNode */
  childrenContentfulLeistungenBeschreibungTextNode?: Maybe<Array<Maybe<ContentfulLeistungenBeschreibungTextNode>>>;
  /** Returns the first child node of type contentfulLeistungenBeschreibungTextNode or null if there are no children of given type on this node */
  childContentfulLeistungenBeschreibungTextNode?: Maybe<ContentfulLeistungenBeschreibungTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLeistungenCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulLeistungenUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulLeistungenSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLeistungenSysContentType>;
};

export type ContentfulLeistungenSysContentType = {
  sys?: Maybe<ContentfulLeistungenSysContentTypeSys>;
};

export type ContentfulLeistungenSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLeistungenpost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  reihenfolge?: Maybe<Scalars['Int']>;
  text?: Maybe<ContentfulLeistungenpostTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLeistungenpostSys>;
  /** Returns all children nodes filtered by type contentfulLeistungenpostTextTextNode */
  childrenContentfulLeistungenpostTextTextNode?: Maybe<Array<Maybe<ContentfulLeistungenpostTextTextNode>>>;
  /** Returns the first child node of type contentfulLeistungenpostTextTextNode or null if there are no children of given type on this node */
  childContentfulLeistungenpostTextTextNode?: Maybe<ContentfulLeistungenpostTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLeistungenpostCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulLeistungenpostUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulLeistungenpostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLeistungenpostSysContentType>;
};

export type ContentfulLeistungenpostSysContentType = {
  sys?: Maybe<ContentfulLeistungenpostSysContentTypeSys>;
};

export type ContentfulLeistungenpostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulTherapienpost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTherapienpostSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulTherapienpostCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulTherapienpostUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulTherapienpostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTherapienpostSysContentType>;
};

export type ContentfulTherapienpostSysContentType = {
  sys?: Maybe<ContentfulTherapienpostSysContentTypeSys>;
};

export type ContentfulTherapienpostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAktuelles = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  beschreibung?: Maybe<ContentfulAktuellesBeschreibungTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAktuellesSys>;
  /** Returns all children nodes filtered by type contentfulAktuellesBeschreibungTextNode */
  childrenContentfulAktuellesBeschreibungTextNode?: Maybe<Array<Maybe<ContentfulAktuellesBeschreibungTextNode>>>;
  /** Returns the first child node of type contentfulAktuellesBeschreibungTextNode or null if there are no children of given type on this node */
  childContentfulAktuellesBeschreibungTextNode?: Maybe<ContentfulAktuellesBeschreibungTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAktuellesCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAktuellesUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulAktuellesSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAktuellesSysContentType>;
};

export type ContentfulAktuellesSysContentType = {
  sys?: Maybe<ContentfulAktuellesSysContentTypeSys>;
};

export type ContentfulAktuellesSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulImpressum = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  titel?: Maybe<Scalars['String']>;
  info?: Maybe<ContentfulImpressumInfo>;
  rechtlichesUeberschrift?: Maybe<Scalars['String']>;
  rechtliches?: Maybe<ContentfulImpressumRechtlichesTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulImpressumSys>;
  /** Returns all children nodes filtered by type contentfulImpressumRechtlichesTextNode */
  childrenContentfulImpressumRechtlichesTextNode?: Maybe<Array<Maybe<ContentfulImpressumRechtlichesTextNode>>>;
  /** Returns the first child node of type contentfulImpressumRechtlichesTextNode or null if there are no children of given type on this node */
  childContentfulImpressumRechtlichesTextNode?: Maybe<ContentfulImpressumRechtlichesTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulImpressumCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulImpressumUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulImpressumInfo = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulImpressumSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulImpressumSysContentType>;
};

export type ContentfulImpressumSysContentType = {
  sys?: Maybe<ContentfulImpressumSysContentTypeSys>;
};

export type ContentfulImpressumSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulNewsletter = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  titel?: Maybe<Scalars['String']>;
  text?: Maybe<ContentfulNewsletterTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNewsletterSys>;
  /** Returns all children nodes filtered by type contentfulNewsletterTextTextNode */
  childrenContentfulNewsletterTextTextNode?: Maybe<Array<Maybe<ContentfulNewsletterTextTextNode>>>;
  /** Returns the first child node of type contentfulNewsletterTextTextNode or null if there are no children of given type on this node */
  childContentfulNewsletterTextTextNode?: Maybe<ContentfulNewsletterTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulNewsletterCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulNewsletterUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulNewsletterSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNewsletterSysContentType>;
};

export type ContentfulNewsletterSysContentType = {
  sys?: Maybe<ContentfulNewsletterSysContentTypeSys>;
};

export type ContentfulNewsletterSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFooter = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  ueberschrift?: Maybe<Scalars['String']>;
  karte?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFooterSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFooterCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulFooterUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulFooterSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFooterSysContentType>;
};

export type ContentfulFooterSysContentType = {
  sys?: Maybe<ContentfulFooterSysContentTypeSys>;
};

export type ContentfulFooterSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLayout = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  menue1?: Maybe<Scalars['String']>;
  menue2?: Maybe<Scalars['String']>;
  menue3?: Maybe<Scalars['String']>;
  menue4?: Maybe<Scalars['String']>;
  menue5?: Maybe<Scalars['String']>;
  newsletterUeberschrift?: Maybe<Scalars['String']>;
  newsletterText?: Maybe<ContentfulLayoutNewsletterTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLayoutSys>;
  /** Returns all children nodes filtered by type contentfulLayoutNewsletterTextTextNode */
  childrenContentfulLayoutNewsletterTextTextNode?: Maybe<Array<Maybe<ContentfulLayoutNewsletterTextTextNode>>>;
  /** Returns the first child node of type contentfulLayoutNewsletterTextTextNode or null if there are no children of given type on this node */
  childContentfulLayoutNewsletterTextTextNode?: Maybe<ContentfulLayoutNewsletterTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLayoutCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulLayoutUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulLayoutSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLayoutSysContentType>;
};

export type ContentfulLayoutSysContentType = {
  sys?: Maybe<ContentfulLayoutSysContentTypeSys>;
};

export type ContentfulLayoutSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAdresse = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  adresse?: Maybe<ContentfulAdresseAdresse>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAdresseSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAdresseCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAdresseUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulAdresseAdresse = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulAdresseSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAdresseSysContentType>;
};

export type ContentfulAdresseSysContentType = {
  sys?: Maybe<ContentfulAdresseSysContentTypeSys>;
};

export type ContentfulAdresseSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulUebermichTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulUebermichTextTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulUebermichTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulTerminButtonTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  button?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulTerminButtonTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulTerminButtonTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulTerminBeschreibungTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  beschreibung?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulTerminBeschreibungTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulTerminBeschreibungTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulStartbildTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulStartbildTextTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulStartbildTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulSchwerpunktepostTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulSchwerpunktepostTextTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulSchwerpunktepostTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulSchwerpunkteBeschreibungTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  beschreibung?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulSchwerpunkteBeschreibungTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulNewsletterTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulNewsletterTextTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulNewsletterTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLeistungenpostTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulLeistungenpostTextTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulLeistungenpostTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLeistungenBeschreibungTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  beschreibung?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulLeistungenBeschreibungTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulLeistungenBeschreibungTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLayoutNewsletterTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  newsletterText?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulLayoutNewsletterTextTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulLayoutNewsletterTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulKontaktBeschreibungTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  beschreibung?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulKontaktBeschreibungTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulKontaktBeschreibungTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulImpressumRechtlichesTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  rechtliches?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulImpressumRechtlichesTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulImpressumRechtlichesTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogpostTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogpostTextTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogpostTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogBeschreibungTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  beschreibung?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogBeschreibungTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogBeschreibungTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAnfahrtBeschreibungTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  beschreibung?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAnfahrtBeschreibungTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAnfahrtBeschreibungTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAktuellesBeschreibungTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  beschreibung?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAktuellesBeschreibungTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAktuellesBeschreibungTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulStartbild?: Maybe<ContentfulStartbild>;
  allContentfulStartbild: ContentfulStartbildConnection;
  contentfulBlog?: Maybe<ContentfulBlog>;
  allContentfulBlog: ContentfulBlogConnection;
  contentfulKontakt?: Maybe<ContentfulKontakt>;
  allContentfulKontakt: ContentfulKontaktConnection;
  contentfulSchwerpunkte?: Maybe<ContentfulSchwerpunkte>;
  allContentfulSchwerpunkte: ContentfulSchwerpunkteConnection;
  contentfulUebermich?: Maybe<ContentfulUebermich>;
  allContentfulUebermich: ContentfulUebermichConnection;
  contentfulTermin?: Maybe<ContentfulTermin>;
  allContentfulTermin: ContentfulTerminConnection;
  contentfulBlogpost?: Maybe<ContentfulBlogpost>;
  allContentfulBlogpost: ContentfulBlogpostConnection;
  contentfulSchwerpunktepost?: Maybe<ContentfulSchwerpunktepost>;
  allContentfulSchwerpunktepost: ContentfulSchwerpunktepostConnection;
  contentfulAnfahrt?: Maybe<ContentfulAnfahrt>;
  allContentfulAnfahrt: ContentfulAnfahrtConnection;
  contentfulLeistungen?: Maybe<ContentfulLeistungen>;
  allContentfulLeistungen: ContentfulLeistungenConnection;
  contentfulLeistungenpost?: Maybe<ContentfulLeistungenpost>;
  allContentfulLeistungenpost: ContentfulLeistungenpostConnection;
  contentfulTherapienpost?: Maybe<ContentfulTherapienpost>;
  allContentfulTherapienpost: ContentfulTherapienpostConnection;
  contentfulAktuelles?: Maybe<ContentfulAktuelles>;
  allContentfulAktuelles: ContentfulAktuellesConnection;
  contentfulImpressum?: Maybe<ContentfulImpressum>;
  allContentfulImpressum: ContentfulImpressumConnection;
  contentfulNewsletter?: Maybe<ContentfulNewsletter>;
  allContentfulNewsletter: ContentfulNewsletterConnection;
  contentfulFooter?: Maybe<ContentfulFooter>;
  allContentfulFooter: ContentfulFooterConnection;
  contentfulLayout?: Maybe<ContentfulLayout>;
  allContentfulLayout: ContentfulLayoutConnection;
  contentfulAdresse?: Maybe<ContentfulAdresse>;
  allContentfulAdresse: ContentfulAdresseConnection;
  contentfulUebermichTextTextNode?: Maybe<ContentfulUebermichTextTextNode>;
  allContentfulUebermichTextTextNode: ContentfulUebermichTextTextNodeConnection;
  contentfulTerminButtonTextNode?: Maybe<ContentfulTerminButtonTextNode>;
  allContentfulTerminButtonTextNode: ContentfulTerminButtonTextNodeConnection;
  contentfulTerminBeschreibungTextNode?: Maybe<ContentfulTerminBeschreibungTextNode>;
  allContentfulTerminBeschreibungTextNode: ContentfulTerminBeschreibungTextNodeConnection;
  contentfulStartbildTextTextNode?: Maybe<ContentfulStartbildTextTextNode>;
  allContentfulStartbildTextTextNode: ContentfulStartbildTextTextNodeConnection;
  contentfulSchwerpunktepostTextTextNode?: Maybe<ContentfulSchwerpunktepostTextTextNode>;
  allContentfulSchwerpunktepostTextTextNode: ContentfulSchwerpunktepostTextTextNodeConnection;
  contentfulSchwerpunkteBeschreibungTextNode?: Maybe<ContentfulSchwerpunkteBeschreibungTextNode>;
  allContentfulSchwerpunkteBeschreibungTextNode: ContentfulSchwerpunkteBeschreibungTextNodeConnection;
  contentfulNewsletterTextTextNode?: Maybe<ContentfulNewsletterTextTextNode>;
  allContentfulNewsletterTextTextNode: ContentfulNewsletterTextTextNodeConnection;
  contentfulLeistungenpostTextTextNode?: Maybe<ContentfulLeistungenpostTextTextNode>;
  allContentfulLeistungenpostTextTextNode: ContentfulLeistungenpostTextTextNodeConnection;
  contentfulLeistungenBeschreibungTextNode?: Maybe<ContentfulLeistungenBeschreibungTextNode>;
  allContentfulLeistungenBeschreibungTextNode: ContentfulLeistungenBeschreibungTextNodeConnection;
  contentfulLayoutNewsletterTextTextNode?: Maybe<ContentfulLayoutNewsletterTextTextNode>;
  allContentfulLayoutNewsletterTextTextNode: ContentfulLayoutNewsletterTextTextNodeConnection;
  contentfulKontaktBeschreibungTextNode?: Maybe<ContentfulKontaktBeschreibungTextNode>;
  allContentfulKontaktBeschreibungTextNode: ContentfulKontaktBeschreibungTextNodeConnection;
  contentfulImpressumRechtlichesTextNode?: Maybe<ContentfulImpressumRechtlichesTextNode>;
  allContentfulImpressumRechtlichesTextNode: ContentfulImpressumRechtlichesTextNodeConnection;
  contentfulBlogpostTextTextNode?: Maybe<ContentfulBlogpostTextTextNode>;
  allContentfulBlogpostTextTextNode: ContentfulBlogpostTextTextNodeConnection;
  contentfulBlogBeschreibungTextNode?: Maybe<ContentfulBlogBeschreibungTextNode>;
  allContentfulBlogBeschreibungTextNode: ContentfulBlogBeschreibungTextNodeConnection;
  contentfulAnfahrtBeschreibungTextNode?: Maybe<ContentfulAnfahrtBeschreibungTextNode>;
  allContentfulAnfahrtBeschreibungTextNode: ContentfulAnfahrtBeschreibungTextNodeConnection;
  contentfulAktuellesBeschreibungTextNode?: Maybe<ContentfulAktuellesBeschreibungTextNode>;
  allContentfulAktuellesBeschreibungTextNode: ContentfulAktuellesBeschreibungTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<MarkdownRemarkSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulEntrySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAssetSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulStartbildArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulStartbildTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulStartbildSysFilterInput>;
  childrenContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeFilterListInput>;
  childContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulStartbildArgs = {
  filter?: InputMaybe<ContentfulStartbildFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulStartbildSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulBlogArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogSysFilterInput>;
  childrenContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterListInput>;
  childContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulBlogArgs = {
  filter?: InputMaybe<ContentfulBlogFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulBlogSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulKontaktArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulKontaktSysFilterInput>;
  childrenContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterListInput>;
  childContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulKontaktArgs = {
  filter?: InputMaybe<ContentfulKontaktFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulKontaktSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulSchwerpunkteArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunkteSysFilterInput>;
  childrenContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterListInput>;
  childContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulSchwerpunkteArgs = {
  filter?: InputMaybe<ContentfulSchwerpunkteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulSchwerpunkteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulUebermichArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulUebermichTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulUebermichSysFilterInput>;
  childrenContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeFilterListInput>;
  childContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulUebermichArgs = {
  filter?: InputMaybe<ContentfulUebermichFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulUebermichSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulTerminArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  button1?: InputMaybe<StringQueryOperatorInput>;
  button2?: InputMaybe<StringQueryOperatorInput>;
  button3?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterInput>;
  button?: InputMaybe<ContentfulTerminButtonTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTerminSysFilterInput>;
  childrenContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeFilterListInput>;
  childContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeFilterInput>;
  childrenContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterListInput>;
  childContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulTerminArgs = {
  filter?: InputMaybe<ContentfulTerminFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulTerminSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulBlogpostArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  datum?: InputMaybe<DateQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulBlogpostTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogpostSysFilterInput>;
  childrenContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeFilterListInput>;
  childContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulBlogpostArgs = {
  filter?: InputMaybe<ContentfulBlogpostFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulBlogpostSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulSchwerpunktepostArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  reihenfolge?: InputMaybe<IntQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunktepostSysFilterInput>;
  childrenContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterListInput>;
  childContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulSchwerpunktepostArgs = {
  filter?: InputMaybe<ContentfulSchwerpunktepostFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulSchwerpunktepostSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAnfahrtArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAnfahrtSysFilterInput>;
  childrenContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterListInput>;
  childContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulAnfahrtArgs = {
  filter?: InputMaybe<ContentfulAnfahrtFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAnfahrtSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLeistungenArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenSysFilterInput>;
  childrenContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterListInput>;
  childContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulLeistungenArgs = {
  filter?: InputMaybe<ContentfulLeistungenFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulLeistungenSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLeistungenpostArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  reihenfolge?: InputMaybe<IntQueryOperatorInput>;
  text?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenpostSysFilterInput>;
  childrenContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterListInput>;
  childContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulLeistungenpostArgs = {
  filter?: InputMaybe<ContentfulLeistungenpostFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulLeistungenpostSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulTherapienpostArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTherapienpostSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulTherapienpostArgs = {
  filter?: InputMaybe<ContentfulTherapienpostFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulTherapienpostSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAktuellesArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAktuellesSysFilterInput>;
  childrenContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterListInput>;
  childContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulAktuellesArgs = {
  filter?: InputMaybe<ContentfulAktuellesFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAktuellesSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulImpressumArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  titel?: InputMaybe<StringQueryOperatorInput>;
  info?: InputMaybe<ContentfulImpressumInfoFilterInput>;
  rechtlichesUeberschrift?: InputMaybe<StringQueryOperatorInput>;
  rechtliches?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImpressumSysFilterInput>;
  childrenContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterListInput>;
  childContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulImpressumArgs = {
  filter?: InputMaybe<ContentfulImpressumFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulImpressumSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulNewsletterArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  titel?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<ContentfulNewsletterTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNewsletterSysFilterInput>;
  childrenContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeFilterListInput>;
  childContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulNewsletterArgs = {
  filter?: InputMaybe<ContentfulNewsletterFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulNewsletterSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulFooterArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  karte?: InputMaybe<ContentfulAssetFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFooterSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulFooterArgs = {
  filter?: InputMaybe<ContentfulFooterFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulFooterSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLayoutArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  menue1?: InputMaybe<StringQueryOperatorInput>;
  menue2?: InputMaybe<StringQueryOperatorInput>;
  menue3?: InputMaybe<StringQueryOperatorInput>;
  menue4?: InputMaybe<StringQueryOperatorInput>;
  menue5?: InputMaybe<StringQueryOperatorInput>;
  newsletterUeberschrift?: InputMaybe<StringQueryOperatorInput>;
  newsletterText?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLayoutSysFilterInput>;
  childrenContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterListInput>;
  childContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulLayoutArgs = {
  filter?: InputMaybe<ContentfulLayoutFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulLayoutSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAdresseArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  adresse?: InputMaybe<ContentfulAdresseAdresseFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAdresseSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulAdresseArgs = {
  filter?: InputMaybe<ContentfulAdresseFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAdresseSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulUebermichTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulUebermichTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulUebermichTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulUebermichTextTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulUebermichTextTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulTerminButtonTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  button?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTerminButtonTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulTerminButtonTextNodeArgs = {
  filter?: InputMaybe<ContentfulTerminButtonTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulTerminButtonTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulTerminBeschreibungTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTerminBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulTerminBeschreibungTextNodeArgs = {
  filter?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulTerminBeschreibungTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulStartbildTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulStartbildTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulStartbildTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulStartbildTextTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulStartbildTextTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulSchwerpunktepostTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulSchwerpunktepostTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulSchwerpunktepostTextTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulSchwerpunkteBeschreibungTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulSchwerpunkteBeschreibungTextNodeArgs = {
  filter?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulNewsletterTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNewsletterTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulNewsletterTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulNewsletterTextTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulNewsletterTextTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLeistungenpostTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenpostTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulLeistungenpostTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulLeistungenpostTextTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLeistungenBeschreibungTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulLeistungenBeschreibungTextNodeArgs = {
  filter?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulLeistungenBeschreibungTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLayoutNewsletterTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  newsletterText?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulLayoutNewsletterTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulLayoutNewsletterTextTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulKontaktBeschreibungTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulKontaktBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulKontaktBeschreibungTextNodeArgs = {
  filter?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulKontaktBeschreibungTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulImpressumRechtlichesTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  rechtliches?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImpressumRechtlichesTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulImpressumRechtlichesTextNodeArgs = {
  filter?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulImpressumRechtlichesTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulBlogpostTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogpostTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogpostTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulBlogpostTextTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulBlogpostTextTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulBlogBeschreibungTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogBeschreibungTextNodeArgs = {
  filter?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulBlogBeschreibungTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAnfahrtBeschreibungTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulAnfahrtBeschreibungTextNodeArgs = {
  filter?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAktuellesBeschreibungTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulAktuellesBeschreibungTextNodeArgs = {
  filter?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulAktuellesBeschreibungTextNodeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ContentfulContentTypeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  blksize?: InputMaybe<FieldSelectorEnum>;
  blocks?: InputMaybe<FieldSelectorEnum>;
  publicURL?: InputMaybe<FieldSelectorEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type FieldSelectorEnum =
  | 'SELECT';

export type ImageSharpFieldSelector = {
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ImageSharpFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFieldSelector = {
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type NodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  blksize?: InputMaybe<SortOrderEnum>;
  blocks?: InputMaybe<SortOrderEnum>;
  publicURL?: InputMaybe<SortOrderEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type ImageSharpSortInput = {
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpOriginalSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResizeSortInput = {
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type NodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  port?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteSiteMetadataFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  port?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataSortInput = {
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  functionRoute?: InputMaybe<SortOrderEnum>;
  pluginName?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  path?: InputMaybe<FieldSelectorEnum>;
  component?: InputMaybe<FieldSelectorEnum>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePluginFieldSelector = {
  resolve?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  path?: InputMaybe<SortOrderEnum>;
  component?: InputMaybe<SortOrderEnum>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginSortInput = {
  resolve?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  browserAPIs?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  depth?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldSelector;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFieldSelector>;
  excerpt?: InputMaybe<FieldSelectorEnum>;
  rawMarkdownBody?: InputMaybe<FieldSelectorEnum>;
  html?: InputMaybe<FieldSelectorEnum>;
  htmlAst?: InputMaybe<FieldSelectorEnum>;
  excerptAst?: InputMaybe<FieldSelectorEnum>;
  headings?: InputMaybe<MarkdownHeadingFieldSelector>;
  timeToRead?: InputMaybe<FieldSelectorEnum>;
  tableOfContents?: InputMaybe<FieldSelectorEnum>;
  wordCount?: InputMaybe<MarkdownWordCountFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type MarkdownRemarkFrontmatterFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownHeadingFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
  depth?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownWordCountFieldSelector = {
  paragraphs?: InputMaybe<FieldSelectorEnum>;
  sentences?: InputMaybe<FieldSelectorEnum>;
  words?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldSelector;
};

export type MarkdownRemarkFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type MarkdownRemarkSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterSortInput>;
  excerpt?: InputMaybe<SortOrderEnum>;
  rawMarkdownBody?: InputMaybe<SortOrderEnum>;
  html?: InputMaybe<SortOrderEnum>;
  htmlAst?: InputMaybe<SortOrderEnum>;
  excerptAst?: InputMaybe<SortOrderEnum>;
  headings?: InputMaybe<MarkdownHeadingSortInput>;
  timeToRead?: InputMaybe<SortOrderEnum>;
  tableOfContents?: InputMaybe<SortOrderEnum>;
  wordCount?: InputMaybe<MarkdownWordCountSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type MarkdownRemarkFrontmatterSortInput = {
  title?: InputMaybe<SortOrderEnum>;
};

export type MarkdownHeadingSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
  depth?: InputMaybe<SortOrderEnum>;
};

export type MarkdownWordCountSortInput = {
  paragraphs?: InputMaybe<SortOrderEnum>;
  sentences?: InputMaybe<SortOrderEnum>;
  words?: InputMaybe<SortOrderEnum>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
};

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  file?: InputMaybe<ContentfulAssetFileFieldSelector>;
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAssetSysFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
  placeholderUrl?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  filename?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  filesize?: InputMaybe<FieldSelectorEnum>;
  publicUrl?: InputMaybe<FieldSelectorEnum>;
  resize?: InputMaybe<RemoteFileResizeFieldSelector>;
  gatsbyImage?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileFieldSelector = {
  url?: InputMaybe<FieldSelectorEnum>;
  details?: InputMaybe<ContentfulAssetFileDetailsFieldSelector>;
  fileName?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileDetailsFieldSelector = {
  size?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFieldSelector>;
};

export type ContentfulAssetFileDetailsImageFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
};

export type RemoteFileResizeFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};

export type ContentfulAssetSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  file?: InputMaybe<ContentfulAssetFileSortInput>;
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAssetSysSortInput>;
  url?: InputMaybe<SortOrderEnum>;
  placeholderUrl?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  filename?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  filesize?: InputMaybe<SortOrderEnum>;
  publicUrl?: InputMaybe<SortOrderEnum>;
  resize?: InputMaybe<RemoteFileResizeSortInput>;
  gatsbyImage?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileSortInput = {
  url?: InputMaybe<SortOrderEnum>;
  details?: InputMaybe<ContentfulAssetFileDetailsSortInput>;
  fileName?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileDetailsSortInput = {
  size?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageSortInput>;
};

export type ContentfulAssetFileDetailsImageSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
};

export type RemoteFileResizeSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ContentfulStartbildTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulStartbildTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulStartbildTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulStartbildSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulStartbildSysContentTypeFilterInput>;
};

export type ContentfulStartbildSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulStartbildSysContentTypeSysFilterInput>;
};

export type ContentfulStartbildSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulStartbildTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulStartbildTextTextNodeFilterInput>;
};

export type ContentfulStartbildConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStartbildEdge>;
  nodes: Array<ContentfulStartbild>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulStartbildGroupConnection>;
};


export type ContentfulStartbildConnectionDistinctArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildConnectionMaxArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildConnectionMinArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildConnectionSumArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulStartbildFieldSelector;
};

export type ContentfulStartbildEdge = {
  next?: Maybe<ContentfulStartbild>;
  node: ContentfulStartbild;
  previous?: Maybe<ContentfulStartbild>;
};

export type ContentfulStartbildFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  bild?: InputMaybe<ContentfulAssetFieldSelector>;
  text?: InputMaybe<ContentfulStartbildTextTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulStartbildSysFieldSelector>;
  childrenContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeFieldSelector>;
  childContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulStartbildTextTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  text?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulStartbildTextTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulStartbildTextTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulStartbildSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulStartbildSysContentTypeFieldSelector>;
};

export type ContentfulStartbildSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulStartbildSysContentTypeSysFieldSelector>;
};

export type ContentfulStartbildSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulStartbildGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStartbildEdge>;
  nodes: Array<ContentfulStartbild>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulStartbildGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulStartbildGroupConnectionDistinctArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildGroupConnectionMaxArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildGroupConnectionMinArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildGroupConnectionSumArgs = {
  field: ContentfulStartbildFieldSelector;
};


export type ContentfulStartbildGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulStartbildFieldSelector;
};

export type ContentfulStartbildFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulStartbildTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulStartbildSysFilterInput>;
  childrenContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeFilterListInput>;
  childContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulStartbildSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  bild?: InputMaybe<ContentfulAssetSortInput>;
  text?: InputMaybe<ContentfulStartbildTextTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulStartbildSysSortInput>;
  childrenContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeSortInput>;
  childContentfulStartbildTextTextNode?: InputMaybe<ContentfulStartbildTextTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulStartbildTextTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  text?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulStartbildTextTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulStartbildTextTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulStartbildSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulStartbildSysContentTypeSortInput>;
};

export type ContentfulStartbildSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulStartbildSysContentTypeSysSortInput>;
};

export type ContentfulStartbildSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulBlogBeschreibungTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogBeschreibungTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulBlogSysContentTypeFilterInput>;
};

export type ContentfulBlogSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulBlogSysContentTypeSysFilterInput>;
};

export type ContentfulBlogSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogBeschreibungTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterInput>;
};

export type ContentfulBlogConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogEdge>;
  nodes: Array<ContentfulBlog>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogGroupConnection>;
};


export type ContentfulBlogConnectionDistinctArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogConnectionMaxArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogConnectionMinArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogConnectionSumArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogFieldSelector;
};

export type ContentfulBlogEdge = {
  next?: Maybe<ContentfulBlog>;
  node: ContentfulBlog;
  previous?: Maybe<ContentfulBlog>;
};

export type ContentfulBlogFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  beschreibung?: InputMaybe<ContentfulBlogBeschreibungTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulBlogSysFieldSelector>;
  childrenContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeFieldSelector>;
  childContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulBlogBeschreibungTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  beschreibung?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulBlogBeschreibungTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulBlogBeschreibungTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulBlogSysContentTypeFieldSelector>;
};

export type ContentfulBlogSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulBlogSysContentTypeSysFieldSelector>;
};

export type ContentfulBlogSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogEdge>;
  nodes: Array<ContentfulBlog>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulBlogGroupConnectionDistinctArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogGroupConnectionMaxArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogGroupConnectionMinArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogGroupConnectionSumArgs = {
  field: ContentfulBlogFieldSelector;
};


export type ContentfulBlogGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogFieldSelector;
};

export type ContentfulBlogFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogSysFilterInput>;
  childrenContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterListInput>;
  childContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulBlogSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  beschreibung?: InputMaybe<ContentfulBlogBeschreibungTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulBlogSysSortInput>;
  childrenContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeSortInput>;
  childContentfulBlogBeschreibungTextNode?: InputMaybe<ContentfulBlogBeschreibungTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulBlogBeschreibungTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  beschreibung?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulBlogBeschreibungTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulBlogBeschreibungTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulBlogSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulBlogSysContentTypeSortInput>;
};

export type ContentfulBlogSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulBlogSysContentTypeSysSortInput>;
};

export type ContentfulBlogSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulKontaktBeschreibungTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulKontaktBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulKontaktBeschreibungTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulKontaktSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulKontaktSysContentTypeFilterInput>;
};

export type ContentfulKontaktSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulKontaktSysContentTypeSysFilterInput>;
};

export type ContentfulKontaktSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulKontaktBeschreibungTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterInput>;
};

export type ContentfulKontaktConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulKontaktEdge>;
  nodes: Array<ContentfulKontakt>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulKontaktGroupConnection>;
};


export type ContentfulKontaktConnectionDistinctArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktConnectionMaxArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktConnectionMinArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktConnectionSumArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulKontaktFieldSelector;
};

export type ContentfulKontaktEdge = {
  next?: Maybe<ContentfulKontakt>;
  node: ContentfulKontakt;
  previous?: Maybe<ContentfulKontakt>;
};

export type ContentfulKontaktFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  beschreibung?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulKontaktSysFieldSelector>;
  childrenContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFieldSelector>;
  childContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulKontaktBeschreibungTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  beschreibung?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulKontaktBeschreibungTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulKontaktBeschreibungTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulKontaktSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulKontaktSysContentTypeFieldSelector>;
};

export type ContentfulKontaktSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulKontaktSysContentTypeSysFieldSelector>;
};

export type ContentfulKontaktSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulKontaktGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulKontaktEdge>;
  nodes: Array<ContentfulKontakt>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulKontaktGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulKontaktGroupConnectionDistinctArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktGroupConnectionMaxArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktGroupConnectionMinArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktGroupConnectionSumArgs = {
  field: ContentfulKontaktFieldSelector;
};


export type ContentfulKontaktGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulKontaktFieldSelector;
};

export type ContentfulKontaktFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulKontaktSysFilterInput>;
  childrenContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterListInput>;
  childContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulKontaktSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  beschreibung?: InputMaybe<ContentfulKontaktBeschreibungTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulKontaktSysSortInput>;
  childrenContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeSortInput>;
  childContentfulKontaktBeschreibungTextNode?: InputMaybe<ContentfulKontaktBeschreibungTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulKontaktBeschreibungTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  beschreibung?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulKontaktBeschreibungTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulKontaktBeschreibungTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulKontaktSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulKontaktSysContentTypeSortInput>;
};

export type ContentfulKontaktSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulKontaktSysContentTypeSysSortInput>;
};

export type ContentfulKontaktSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSchwerpunkteSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulSchwerpunkteSysContentTypeFilterInput>;
};

export type ContentfulSchwerpunkteSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulSchwerpunkteSysContentTypeSysFilterInput>;
};

export type ContentfulSchwerpunkteSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterInput>;
};

export type ContentfulSchwerpunkteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunkteEdge>;
  nodes: Array<ContentfulSchwerpunkte>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunkteGroupConnection>;
};


export type ContentfulSchwerpunkteConnectionDistinctArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteConnectionMaxArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteConnectionMinArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteConnectionSumArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunkteFieldSelector;
};

export type ContentfulSchwerpunkteEdge = {
  next?: Maybe<ContentfulSchwerpunkte>;
  node: ContentfulSchwerpunkte;
  previous?: Maybe<ContentfulSchwerpunkte>;
};

export type ContentfulSchwerpunkteFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  beschreibung?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulSchwerpunkteSysFieldSelector>;
  childrenContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector>;
  childContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  beschreibung?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSchwerpunkteSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulSchwerpunkteSysContentTypeFieldSelector>;
};

export type ContentfulSchwerpunkteSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulSchwerpunkteSysContentTypeSysFieldSelector>;
};

export type ContentfulSchwerpunkteSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSchwerpunkteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunkteEdge>;
  nodes: Array<ContentfulSchwerpunkte>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunkteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulSchwerpunkteGroupConnectionDistinctArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteGroupConnectionMaxArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteGroupConnectionMinArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteGroupConnectionSumArgs = {
  field: ContentfulSchwerpunkteFieldSelector;
};


export type ContentfulSchwerpunkteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunkteFieldSelector;
};

export type ContentfulSchwerpunkteFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunkteSysFilterInput>;
  childrenContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterListInput>;
  childContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulSchwerpunkteSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  beschreibung?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulSchwerpunkteSysSortInput>;
  childrenContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSortInput>;
  childContentfulSchwerpunkteBeschreibungTextNode?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  beschreibung?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulSchwerpunkteBeschreibungTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulSchwerpunkteSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulSchwerpunkteSysContentTypeSortInput>;
};

export type ContentfulSchwerpunkteSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulSchwerpunkteSysContentTypeSysSortInput>;
};

export type ContentfulSchwerpunkteSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulUebermichTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulUebermichTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulUebermichTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulUebermichSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulUebermichSysContentTypeFilterInput>;
};

export type ContentfulUebermichSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulUebermichSysContentTypeSysFilterInput>;
};

export type ContentfulUebermichSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulUebermichTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulUebermichTextTextNodeFilterInput>;
};

export type ContentfulUebermichConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulUebermichEdge>;
  nodes: Array<ContentfulUebermich>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulUebermichGroupConnection>;
};


export type ContentfulUebermichConnectionDistinctArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichConnectionMaxArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichConnectionMinArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichConnectionSumArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulUebermichFieldSelector;
};

export type ContentfulUebermichEdge = {
  next?: Maybe<ContentfulUebermich>;
  node: ContentfulUebermich;
  previous?: Maybe<ContentfulUebermich>;
};

export type ContentfulUebermichFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  bild?: InputMaybe<ContentfulAssetFieldSelector>;
  text?: InputMaybe<ContentfulUebermichTextTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulUebermichSysFieldSelector>;
  childrenContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeFieldSelector>;
  childContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulUebermichTextTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  text?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulUebermichTextTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulUebermichTextTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulUebermichSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulUebermichSysContentTypeFieldSelector>;
};

export type ContentfulUebermichSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulUebermichSysContentTypeSysFieldSelector>;
};

export type ContentfulUebermichSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulUebermichGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulUebermichEdge>;
  nodes: Array<ContentfulUebermich>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulUebermichGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulUebermichGroupConnectionDistinctArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichGroupConnectionMaxArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichGroupConnectionMinArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichGroupConnectionSumArgs = {
  field: ContentfulUebermichFieldSelector;
};


export type ContentfulUebermichGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulUebermichFieldSelector;
};

export type ContentfulUebermichFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulUebermichTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulUebermichSysFilterInput>;
  childrenContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeFilterListInput>;
  childContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulUebermichSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  bild?: InputMaybe<ContentfulAssetSortInput>;
  text?: InputMaybe<ContentfulUebermichTextTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulUebermichSysSortInput>;
  childrenContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeSortInput>;
  childContentfulUebermichTextTextNode?: InputMaybe<ContentfulUebermichTextTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulUebermichTextTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  text?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulUebermichTextTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulUebermichTextTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulUebermichSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulUebermichSysContentTypeSortInput>;
};

export type ContentfulUebermichSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulUebermichSysContentTypeSysSortInput>;
};

export type ContentfulUebermichSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulTerminBeschreibungTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTerminBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulTerminBeschreibungTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTerminButtonTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  button?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTerminButtonTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulTerminButtonTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTerminSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulTerminSysContentTypeFilterInput>;
};

export type ContentfulTerminSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulTerminSysContentTypeSysFilterInput>;
};

export type ContentfulTerminSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTerminButtonTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulTerminButtonTextNodeFilterInput>;
};

export type ContentfulTerminBeschreibungTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterInput>;
};

export type ContentfulTerminConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTerminEdge>;
  nodes: Array<ContentfulTermin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTerminGroupConnection>;
};


export type ContentfulTerminConnectionDistinctArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminConnectionMaxArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminConnectionMinArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminConnectionSumArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTerminFieldSelector;
};

export type ContentfulTerminEdge = {
  next?: Maybe<ContentfulTermin>;
  node: ContentfulTermin;
  previous?: Maybe<ContentfulTermin>;
};

export type ContentfulTerminFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  button1?: InputMaybe<FieldSelectorEnum>;
  button2?: InputMaybe<FieldSelectorEnum>;
  button3?: InputMaybe<FieldSelectorEnum>;
  beschreibung?: InputMaybe<ContentfulTerminBeschreibungTextNodeFieldSelector>;
  button?: InputMaybe<ContentfulTerminButtonTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulTerminSysFieldSelector>;
  childrenContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeFieldSelector>;
  childContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeFieldSelector>;
  childrenContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeFieldSelector>;
  childContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulTerminBeschreibungTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  beschreibung?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulTerminBeschreibungTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulTerminBeschreibungTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulTerminButtonTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  button?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulTerminButtonTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulTerminButtonTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulTerminSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulTerminSysContentTypeFieldSelector>;
};

export type ContentfulTerminSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulTerminSysContentTypeSysFieldSelector>;
};

export type ContentfulTerminSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulTerminGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTerminEdge>;
  nodes: Array<ContentfulTermin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTerminGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulTerminGroupConnectionDistinctArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminGroupConnectionMaxArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminGroupConnectionMinArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminGroupConnectionSumArgs = {
  field: ContentfulTerminFieldSelector;
};


export type ContentfulTerminGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTerminFieldSelector;
};

export type ContentfulTerminFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  button1?: InputMaybe<StringQueryOperatorInput>;
  button2?: InputMaybe<StringQueryOperatorInput>;
  button3?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterInput>;
  button?: InputMaybe<ContentfulTerminButtonTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTerminSysFilterInput>;
  childrenContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeFilterListInput>;
  childContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeFilterInput>;
  childrenContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterListInput>;
  childContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulTerminSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  button1?: InputMaybe<SortOrderEnum>;
  button2?: InputMaybe<SortOrderEnum>;
  button3?: InputMaybe<SortOrderEnum>;
  beschreibung?: InputMaybe<ContentfulTerminBeschreibungTextNodeSortInput>;
  button?: InputMaybe<ContentfulTerminButtonTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulTerminSysSortInput>;
  childrenContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeSortInput>;
  childContentfulTerminButtonTextNode?: InputMaybe<ContentfulTerminButtonTextNodeSortInput>;
  childrenContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeSortInput>;
  childContentfulTerminBeschreibungTextNode?: InputMaybe<ContentfulTerminBeschreibungTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulTerminBeschreibungTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  beschreibung?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulTerminBeschreibungTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulTerminBeschreibungTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulTerminButtonTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  button?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulTerminButtonTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulTerminButtonTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulTerminSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulTerminSysContentTypeSortInput>;
};

export type ContentfulTerminSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulTerminSysContentTypeSysSortInput>;
};

export type ContentfulTerminSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulBlogpostTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogpostTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogpostTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogpostSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulBlogpostSysContentTypeFilterInput>;
};

export type ContentfulBlogpostSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulBlogpostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogpostSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogpostTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulBlogpostTextTextNodeFilterInput>;
};

export type ContentfulBlogpostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogpostEdge>;
  nodes: Array<ContentfulBlogpost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogpostGroupConnection>;
};


export type ContentfulBlogpostConnectionDistinctArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostConnectionMaxArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostConnectionMinArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostConnectionSumArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogpostFieldSelector;
};

export type ContentfulBlogpostEdge = {
  next?: Maybe<ContentfulBlogpost>;
  node: ContentfulBlogpost;
  previous?: Maybe<ContentfulBlogpost>;
};

export type ContentfulBlogpostFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  datum?: InputMaybe<FieldSelectorEnum>;
  bild?: InputMaybe<ContentfulAssetFieldSelector>;
  text?: InputMaybe<ContentfulBlogpostTextTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulBlogpostSysFieldSelector>;
  childrenContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeFieldSelector>;
  childContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulBlogpostTextTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  text?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulBlogpostTextTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulBlogpostTextTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogpostSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulBlogpostSysContentTypeFieldSelector>;
};

export type ContentfulBlogpostSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulBlogpostSysContentTypeSysFieldSelector>;
};

export type ContentfulBlogpostSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogpostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogpostEdge>;
  nodes: Array<ContentfulBlogpost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogpostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulBlogpostGroupConnectionDistinctArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostGroupConnectionMaxArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostGroupConnectionMinArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostGroupConnectionSumArgs = {
  field: ContentfulBlogpostFieldSelector;
};


export type ContentfulBlogpostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogpostFieldSelector;
};

export type ContentfulBlogpostFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  datum?: InputMaybe<DateQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulBlogpostTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogpostSysFilterInput>;
  childrenContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeFilterListInput>;
  childContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulBlogpostSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  datum?: InputMaybe<SortOrderEnum>;
  bild?: InputMaybe<ContentfulAssetSortInput>;
  text?: InputMaybe<ContentfulBlogpostTextTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulBlogpostSysSortInput>;
  childrenContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeSortInput>;
  childContentfulBlogpostTextTextNode?: InputMaybe<ContentfulBlogpostTextTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulBlogpostTextTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  text?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulBlogpostTextTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulBlogpostTextTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulBlogpostSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulBlogpostSysContentTypeSortInput>;
};

export type ContentfulBlogpostSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulBlogpostSysContentTypeSysSortInput>;
};

export type ContentfulBlogpostSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulSchwerpunktepostTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulSchwerpunktepostTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSchwerpunktepostSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulSchwerpunktepostSysContentTypeFilterInput>;
};

export type ContentfulSchwerpunktepostSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulSchwerpunktepostSysContentTypeSysFilterInput>;
};

export type ContentfulSchwerpunktepostSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSchwerpunktepostTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterInput>;
};

export type ContentfulSchwerpunktepostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunktepostEdge>;
  nodes: Array<ContentfulSchwerpunktepost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunktepostGroupConnection>;
};


export type ContentfulSchwerpunktepostConnectionDistinctArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostConnectionMaxArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostConnectionMinArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostConnectionSumArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunktepostFieldSelector;
};

export type ContentfulSchwerpunktepostEdge = {
  next?: Maybe<ContentfulSchwerpunktepost>;
  node: ContentfulSchwerpunktepost;
  previous?: Maybe<ContentfulSchwerpunktepost>;
};

export type ContentfulSchwerpunktepostFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  reihenfolge?: InputMaybe<FieldSelectorEnum>;
  bild?: InputMaybe<ContentfulAssetFieldSelector>;
  text?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulSchwerpunktepostSysFieldSelector>;
  childrenContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFieldSelector>;
  childContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulSchwerpunktepostTextTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  text?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulSchwerpunktepostTextTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSchwerpunktepostSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulSchwerpunktepostSysContentTypeFieldSelector>;
};

export type ContentfulSchwerpunktepostSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulSchwerpunktepostSysContentTypeSysFieldSelector>;
};

export type ContentfulSchwerpunktepostSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSchwerpunktepostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunktepostEdge>;
  nodes: Array<ContentfulSchwerpunktepost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunktepostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulSchwerpunktepostGroupConnectionDistinctArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostGroupConnectionMaxArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostGroupConnectionMinArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostGroupConnectionSumArgs = {
  field: ContentfulSchwerpunktepostFieldSelector;
};


export type ContentfulSchwerpunktepostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunktepostFieldSelector;
};

export type ContentfulSchwerpunktepostFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  reihenfolge?: InputMaybe<IntQueryOperatorInput>;
  bild?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulSchwerpunktepostSysFilterInput>;
  childrenContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterListInput>;
  childContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulSchwerpunktepostSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  reihenfolge?: InputMaybe<SortOrderEnum>;
  bild?: InputMaybe<ContentfulAssetSortInput>;
  text?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulSchwerpunktepostSysSortInput>;
  childrenContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeSortInput>;
  childContentfulSchwerpunktepostTextTextNode?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulSchwerpunktepostTextTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  text?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulSchwerpunktepostTextTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulSchwerpunktepostTextTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulSchwerpunktepostSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulSchwerpunktepostSysContentTypeSortInput>;
};

export type ContentfulSchwerpunktepostSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulSchwerpunktepostSysContentTypeSysSortInput>;
};

export type ContentfulSchwerpunktepostSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAnfahrtBeschreibungTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulAnfahrtBeschreibungTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAnfahrtSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulAnfahrtSysContentTypeFilterInput>;
};

export type ContentfulAnfahrtSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulAnfahrtSysContentTypeSysFilterInput>;
};

export type ContentfulAnfahrtSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAnfahrtBeschreibungTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterInput>;
};

export type ContentfulAnfahrtConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnfahrtEdge>;
  nodes: Array<ContentfulAnfahrt>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAnfahrtGroupConnection>;
};


export type ContentfulAnfahrtConnectionDistinctArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtConnectionMaxArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtConnectionMinArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtConnectionSumArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAnfahrtFieldSelector;
};

export type ContentfulAnfahrtEdge = {
  next?: Maybe<ContentfulAnfahrt>;
  node: ContentfulAnfahrt;
  previous?: Maybe<ContentfulAnfahrt>;
};

export type ContentfulAnfahrtFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  beschreibung?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAnfahrtSysFieldSelector>;
  childrenContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFieldSelector>;
  childContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulAnfahrtBeschreibungTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  beschreibung?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulAnfahrtBeschreibungTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAnfahrtSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulAnfahrtSysContentTypeFieldSelector>;
};

export type ContentfulAnfahrtSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulAnfahrtSysContentTypeSysFieldSelector>;
};

export type ContentfulAnfahrtSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAnfahrtGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnfahrtEdge>;
  nodes: Array<ContentfulAnfahrt>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAnfahrtGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAnfahrtGroupConnectionDistinctArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtGroupConnectionMaxArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtGroupConnectionMinArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtGroupConnectionSumArgs = {
  field: ContentfulAnfahrtFieldSelector;
};


export type ContentfulAnfahrtGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAnfahrtFieldSelector;
};

export type ContentfulAnfahrtFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAnfahrtSysFilterInput>;
  childrenContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterListInput>;
  childContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulAnfahrtSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  beschreibung?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAnfahrtSysSortInput>;
  childrenContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSortInput>;
  childContentfulAnfahrtBeschreibungTextNode?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulAnfahrtBeschreibungTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  beschreibung?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAnfahrtBeschreibungTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulAnfahrtBeschreibungTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAnfahrtSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulAnfahrtSysContentTypeSortInput>;
};

export type ContentfulAnfahrtSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulAnfahrtSysContentTypeSysSortInput>;
};

export type ContentfulAnfahrtSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulLeistungenBeschreibungTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulLeistungenBeschreibungTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLeistungenSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulLeistungenSysContentTypeFilterInput>;
};

export type ContentfulLeistungenSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulLeistungenSysContentTypeSysFilterInput>;
};

export type ContentfulLeistungenSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLeistungenBeschreibungTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterInput>;
};

export type ContentfulLeistungenConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenEdge>;
  nodes: Array<ContentfulLeistungen>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenGroupConnection>;
};


export type ContentfulLeistungenConnectionDistinctArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenConnectionMaxArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenConnectionMinArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenConnectionSumArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenFieldSelector;
};

export type ContentfulLeistungenEdge = {
  next?: Maybe<ContentfulLeistungen>;
  node: ContentfulLeistungen;
  previous?: Maybe<ContentfulLeistungen>;
};

export type ContentfulLeistungenFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  beschreibung?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulLeistungenSysFieldSelector>;
  childrenContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFieldSelector>;
  childContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulLeistungenBeschreibungTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  beschreibung?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulLeistungenBeschreibungTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulLeistungenSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulLeistungenSysContentTypeFieldSelector>;
};

export type ContentfulLeistungenSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulLeistungenSysContentTypeSysFieldSelector>;
};

export type ContentfulLeistungenSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulLeistungenGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenEdge>;
  nodes: Array<ContentfulLeistungen>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLeistungenGroupConnectionDistinctArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenGroupConnectionMaxArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenGroupConnectionMinArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenGroupConnectionSumArgs = {
  field: ContentfulLeistungenFieldSelector;
};


export type ContentfulLeistungenGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenFieldSelector;
};

export type ContentfulLeistungenFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenSysFilterInput>;
  childrenContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterListInput>;
  childContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulLeistungenSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  beschreibung?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulLeistungenSysSortInput>;
  childrenContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeSortInput>;
  childContentfulLeistungenBeschreibungTextNode?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulLeistungenBeschreibungTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  beschreibung?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulLeistungenBeschreibungTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulLeistungenBeschreibungTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulLeistungenSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulLeistungenSysContentTypeSortInput>;
};

export type ContentfulLeistungenSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulLeistungenSysContentTypeSysSortInput>;
};

export type ContentfulLeistungenSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulLeistungenpostTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenpostTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulLeistungenpostTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLeistungenpostSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulLeistungenpostSysContentTypeFilterInput>;
};

export type ContentfulLeistungenpostSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulLeistungenpostSysContentTypeSysFilterInput>;
};

export type ContentfulLeistungenpostSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLeistungenpostTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterInput>;
};

export type ContentfulLeistungenpostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenpostEdge>;
  nodes: Array<ContentfulLeistungenpost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenpostGroupConnection>;
};


export type ContentfulLeistungenpostConnectionDistinctArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostConnectionMaxArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostConnectionMinArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostConnectionSumArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenpostFieldSelector;
};

export type ContentfulLeistungenpostEdge = {
  next?: Maybe<ContentfulLeistungenpost>;
  node: ContentfulLeistungenpost;
  previous?: Maybe<ContentfulLeistungenpost>;
};

export type ContentfulLeistungenpostFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  reihenfolge?: InputMaybe<FieldSelectorEnum>;
  text?: InputMaybe<ContentfulLeistungenpostTextTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulLeistungenpostSysFieldSelector>;
  childrenContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeFieldSelector>;
  childContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulLeistungenpostTextTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  text?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulLeistungenpostTextTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulLeistungenpostTextTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulLeistungenpostSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulLeistungenpostSysContentTypeFieldSelector>;
};

export type ContentfulLeistungenpostSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulLeistungenpostSysContentTypeSysFieldSelector>;
};

export type ContentfulLeistungenpostSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulLeistungenpostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenpostEdge>;
  nodes: Array<ContentfulLeistungenpost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenpostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLeistungenpostGroupConnectionDistinctArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostGroupConnectionMaxArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostGroupConnectionMinArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostGroupConnectionSumArgs = {
  field: ContentfulLeistungenpostFieldSelector;
};


export type ContentfulLeistungenpostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenpostFieldSelector;
};

export type ContentfulLeistungenpostFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  reihenfolge?: InputMaybe<IntQueryOperatorInput>;
  text?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeistungenpostSysFilterInput>;
  childrenContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterListInput>;
  childContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulLeistungenpostSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  reihenfolge?: InputMaybe<SortOrderEnum>;
  text?: InputMaybe<ContentfulLeistungenpostTextTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulLeistungenpostSysSortInput>;
  childrenContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeSortInput>;
  childContentfulLeistungenpostTextTextNode?: InputMaybe<ContentfulLeistungenpostTextTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulLeistungenpostTextTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  text?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulLeistungenpostTextTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulLeistungenpostTextTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulLeistungenpostSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulLeistungenpostSysContentTypeSortInput>;
};

export type ContentfulLeistungenpostSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulLeistungenpostSysContentTypeSysSortInput>;
};

export type ContentfulLeistungenpostSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulTherapienpostSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulTherapienpostSysContentTypeFilterInput>;
};

export type ContentfulTherapienpostSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulTherapienpostSysContentTypeSysFilterInput>;
};

export type ContentfulTherapienpostSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTherapienpostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTherapienpostEdge>;
  nodes: Array<ContentfulTherapienpost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTherapienpostGroupConnection>;
};


export type ContentfulTherapienpostConnectionDistinctArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostConnectionMaxArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostConnectionMinArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostConnectionSumArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTherapienpostFieldSelector;
};

export type ContentfulTherapienpostEdge = {
  next?: Maybe<ContentfulTherapienpost>;
  node: ContentfulTherapienpost;
  previous?: Maybe<ContentfulTherapienpost>;
};

export type ContentfulTherapienpostFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulTherapienpostSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulTherapienpostSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulTherapienpostSysContentTypeFieldSelector>;
};

export type ContentfulTherapienpostSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulTherapienpostSysContentTypeSysFieldSelector>;
};

export type ContentfulTherapienpostSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulTherapienpostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTherapienpostEdge>;
  nodes: Array<ContentfulTherapienpost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTherapienpostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulTherapienpostGroupConnectionDistinctArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostGroupConnectionMaxArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostGroupConnectionMinArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostGroupConnectionSumArgs = {
  field: ContentfulTherapienpostFieldSelector;
};


export type ContentfulTherapienpostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTherapienpostFieldSelector;
};

export type ContentfulTherapienpostFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulTherapienpostSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulTherapienpostSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulTherapienpostSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulTherapienpostSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulTherapienpostSysContentTypeSortInput>;
};

export type ContentfulTherapienpostSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulTherapienpostSysContentTypeSysSortInput>;
};

export type ContentfulTherapienpostSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAktuellesBeschreibungTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  beschreibung?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulAktuellesBeschreibungTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAktuellesSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulAktuellesSysContentTypeFilterInput>;
};

export type ContentfulAktuellesSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulAktuellesSysContentTypeSysFilterInput>;
};

export type ContentfulAktuellesSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAktuellesBeschreibungTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterInput>;
};

export type ContentfulAktuellesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAktuellesEdge>;
  nodes: Array<ContentfulAktuelles>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAktuellesGroupConnection>;
};


export type ContentfulAktuellesConnectionDistinctArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesConnectionMaxArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesConnectionMinArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesConnectionSumArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAktuellesFieldSelector;
};

export type ContentfulAktuellesEdge = {
  next?: Maybe<ContentfulAktuelles>;
  node: ContentfulAktuelles;
  previous?: Maybe<ContentfulAktuelles>;
};

export type ContentfulAktuellesFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  beschreibung?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAktuellesSysFieldSelector>;
  childrenContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFieldSelector>;
  childContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulAktuellesBeschreibungTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  beschreibung?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulAktuellesBeschreibungTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAktuellesSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulAktuellesSysContentTypeFieldSelector>;
};

export type ContentfulAktuellesSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulAktuellesSysContentTypeSysFieldSelector>;
};

export type ContentfulAktuellesSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAktuellesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAktuellesEdge>;
  nodes: Array<ContentfulAktuelles>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAktuellesGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAktuellesGroupConnectionDistinctArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesGroupConnectionMaxArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesGroupConnectionMinArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesGroupConnectionSumArgs = {
  field: ContentfulAktuellesFieldSelector;
};


export type ContentfulAktuellesGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAktuellesFieldSelector;
};

export type ContentfulAktuellesFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  beschreibung?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAktuellesSysFilterInput>;
  childrenContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterListInput>;
  childContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulAktuellesSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  beschreibung?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAktuellesSysSortInput>;
  childrenContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeSortInput>;
  childContentfulAktuellesBeschreibungTextNode?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulAktuellesBeschreibungTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  beschreibung?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAktuellesBeschreibungTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulAktuellesBeschreibungTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAktuellesSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulAktuellesSysContentTypeSortInput>;
};

export type ContentfulAktuellesSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulAktuellesSysContentTypeSysSortInput>;
};

export type ContentfulAktuellesSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulImpressumInfoFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulImpressumRechtlichesTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  rechtliches?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImpressumRechtlichesTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulImpressumRechtlichesTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulImpressumSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulImpressumSysContentTypeFilterInput>;
};

export type ContentfulImpressumSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulImpressumSysContentTypeSysFilterInput>;
};

export type ContentfulImpressumSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulImpressumRechtlichesTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterInput>;
};

export type ContentfulImpressumConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImpressumEdge>;
  nodes: Array<ContentfulImpressum>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImpressumGroupConnection>;
};


export type ContentfulImpressumConnectionDistinctArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumConnectionMaxArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumConnectionMinArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumConnectionSumArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImpressumFieldSelector;
};

export type ContentfulImpressumEdge = {
  next?: Maybe<ContentfulImpressum>;
  node: ContentfulImpressum;
  previous?: Maybe<ContentfulImpressum>;
};

export type ContentfulImpressumFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  titel?: InputMaybe<FieldSelectorEnum>;
  info?: InputMaybe<ContentfulImpressumInfoFieldSelector>;
  rechtlichesUeberschrift?: InputMaybe<FieldSelectorEnum>;
  rechtliches?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulImpressumSysFieldSelector>;
  childrenContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFieldSelector>;
  childContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulImpressumInfoFieldSelector = {
  raw?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulImpressumRechtlichesTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  rechtliches?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulImpressumRechtlichesTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulImpressumRechtlichesTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulImpressumSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulImpressumSysContentTypeFieldSelector>;
};

export type ContentfulImpressumSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulImpressumSysContentTypeSysFieldSelector>;
};

export type ContentfulImpressumSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulImpressumGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImpressumEdge>;
  nodes: Array<ContentfulImpressum>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImpressumGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulImpressumGroupConnectionDistinctArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumGroupConnectionMaxArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumGroupConnectionMinArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumGroupConnectionSumArgs = {
  field: ContentfulImpressumFieldSelector;
};


export type ContentfulImpressumGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImpressumFieldSelector;
};

export type ContentfulImpressumFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  titel?: InputMaybe<StringQueryOperatorInput>;
  info?: InputMaybe<ContentfulImpressumInfoFilterInput>;
  rechtlichesUeberschrift?: InputMaybe<StringQueryOperatorInput>;
  rechtliches?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImpressumSysFilterInput>;
  childrenContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterListInput>;
  childContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulImpressumSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  titel?: InputMaybe<SortOrderEnum>;
  info?: InputMaybe<ContentfulImpressumInfoSortInput>;
  rechtlichesUeberschrift?: InputMaybe<SortOrderEnum>;
  rechtliches?: InputMaybe<ContentfulImpressumRechtlichesTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulImpressumSysSortInput>;
  childrenContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeSortInput>;
  childContentfulImpressumRechtlichesTextNode?: InputMaybe<ContentfulImpressumRechtlichesTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulImpressumInfoSortInput = {
  raw?: InputMaybe<SortOrderEnum>;
};

export type ContentfulImpressumRechtlichesTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  rechtliches?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulImpressumRechtlichesTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulImpressumRechtlichesTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulImpressumSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulImpressumSysContentTypeSortInput>;
};

export type ContentfulImpressumSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulImpressumSysContentTypeSysSortInput>;
};

export type ContentfulImpressumSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulNewsletterTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNewsletterTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulNewsletterTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNewsletterSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulNewsletterSysContentTypeFilterInput>;
};

export type ContentfulNewsletterSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulNewsletterSysContentTypeSysFilterInput>;
};

export type ContentfulNewsletterSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulNewsletterTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulNewsletterTextTextNodeFilterInput>;
};

export type ContentfulNewsletterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsletterEdge>;
  nodes: Array<ContentfulNewsletter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulNewsletterGroupConnection>;
};


export type ContentfulNewsletterConnectionDistinctArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterConnectionMaxArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterConnectionMinArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterConnectionSumArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulNewsletterFieldSelector;
};

export type ContentfulNewsletterEdge = {
  next?: Maybe<ContentfulNewsletter>;
  node: ContentfulNewsletter;
  previous?: Maybe<ContentfulNewsletter>;
};

export type ContentfulNewsletterFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  titel?: InputMaybe<FieldSelectorEnum>;
  text?: InputMaybe<ContentfulNewsletterTextTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulNewsletterSysFieldSelector>;
  childrenContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeFieldSelector>;
  childContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulNewsletterTextTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  text?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulNewsletterTextTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulNewsletterTextTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulNewsletterSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulNewsletterSysContentTypeFieldSelector>;
};

export type ContentfulNewsletterSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulNewsletterSysContentTypeSysFieldSelector>;
};

export type ContentfulNewsletterSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulNewsletterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsletterEdge>;
  nodes: Array<ContentfulNewsletter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulNewsletterGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulNewsletterGroupConnectionDistinctArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterGroupConnectionMaxArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterGroupConnectionMinArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterGroupConnectionSumArgs = {
  field: ContentfulNewsletterFieldSelector;
};


export type ContentfulNewsletterGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulNewsletterFieldSelector;
};

export type ContentfulNewsletterFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  titel?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<ContentfulNewsletterTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulNewsletterSysFilterInput>;
  childrenContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeFilterListInput>;
  childContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulNewsletterSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  titel?: InputMaybe<SortOrderEnum>;
  text?: InputMaybe<ContentfulNewsletterTextTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulNewsletterSysSortInput>;
  childrenContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeSortInput>;
  childContentfulNewsletterTextTextNode?: InputMaybe<ContentfulNewsletterTextTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulNewsletterTextTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  text?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulNewsletterTextTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulNewsletterTextTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulNewsletterSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulNewsletterSysContentTypeSortInput>;
};

export type ContentfulNewsletterSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulNewsletterSysContentTypeSysSortInput>;
};

export type ContentfulNewsletterSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulFooterSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulFooterSysContentTypeFilterInput>;
};

export type ContentfulFooterSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFooterSysContentTypeSysFilterInput>;
};

export type ContentfulFooterSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulFooterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFooterEdge>;
  nodes: Array<ContentfulFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFooterGroupConnection>;
};


export type ContentfulFooterConnectionDistinctArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionMaxArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionMinArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionSumArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFooterFieldSelector;
};

export type ContentfulFooterEdge = {
  next?: Maybe<ContentfulFooter>;
  node: ContentfulFooter;
  previous?: Maybe<ContentfulFooter>;
};

export type ContentfulFooterFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  ueberschrift?: InputMaybe<FieldSelectorEnum>;
  karte?: InputMaybe<ContentfulAssetFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulFooterSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulFooterSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulFooterSysContentTypeFieldSelector>;
};

export type ContentfulFooterSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulFooterSysContentTypeSysFieldSelector>;
};

export type ContentfulFooterSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulFooterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFooterEdge>;
  nodes: Array<ContentfulFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFooterGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulFooterGroupConnectionDistinctArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionMaxArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionMinArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionSumArgs = {
  field: ContentfulFooterFieldSelector;
};


export type ContentfulFooterGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFooterFieldSelector;
};

export type ContentfulFooterFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  ueberschrift?: InputMaybe<StringQueryOperatorInput>;
  karte?: InputMaybe<ContentfulAssetFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFooterSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulFooterSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  ueberschrift?: InputMaybe<SortOrderEnum>;
  karte?: InputMaybe<ContentfulAssetSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulFooterSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulFooterSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulFooterSysContentTypeSortInput>;
};

export type ContentfulFooterSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulFooterSysContentTypeSysSortInput>;
};

export type ContentfulFooterSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulLayoutNewsletterTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  newsletterText?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeSysFilterInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type ContentfulLayoutNewsletterTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLayoutSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulLayoutSysContentTypeFilterInput>;
};

export type ContentfulLayoutSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulLayoutSysContentTypeSysFilterInput>;
};

export type ContentfulLayoutSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLayoutNewsletterTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterInput>;
};

export type ContentfulLayoutConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLayoutEdge>;
  nodes: Array<ContentfulLayout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLayoutGroupConnection>;
};


export type ContentfulLayoutConnectionDistinctArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutConnectionMaxArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutConnectionMinArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutConnectionSumArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLayoutFieldSelector;
};

export type ContentfulLayoutEdge = {
  next?: Maybe<ContentfulLayout>;
  node: ContentfulLayout;
  previous?: Maybe<ContentfulLayout>;
};

export type ContentfulLayoutFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  menue1?: InputMaybe<FieldSelectorEnum>;
  menue2?: InputMaybe<FieldSelectorEnum>;
  menue3?: InputMaybe<FieldSelectorEnum>;
  menue4?: InputMaybe<FieldSelectorEnum>;
  menue5?: InputMaybe<FieldSelectorEnum>;
  newsletterUeberschrift?: InputMaybe<FieldSelectorEnum>;
  newsletterText?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulLayoutSysFieldSelector>;
  childrenContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFieldSelector>;
  childContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulLayoutNewsletterTextTextNodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  newsletterText?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeSysFieldSelector>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
};

export type ContentfulLayoutNewsletterTextTextNodeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulLayoutSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulLayoutSysContentTypeFieldSelector>;
};

export type ContentfulLayoutSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulLayoutSysContentTypeSysFieldSelector>;
};

export type ContentfulLayoutSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulLayoutGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLayoutEdge>;
  nodes: Array<ContentfulLayout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLayoutGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLayoutGroupConnectionDistinctArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutGroupConnectionMaxArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutGroupConnectionMinArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutGroupConnectionSumArgs = {
  field: ContentfulLayoutFieldSelector;
};


export type ContentfulLayoutGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLayoutFieldSelector;
};

export type ContentfulLayoutFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  menue1?: InputMaybe<StringQueryOperatorInput>;
  menue2?: InputMaybe<StringQueryOperatorInput>;
  menue3?: InputMaybe<StringQueryOperatorInput>;
  menue4?: InputMaybe<StringQueryOperatorInput>;
  menue5?: InputMaybe<StringQueryOperatorInput>;
  newsletterUeberschrift?: InputMaybe<StringQueryOperatorInput>;
  newsletterText?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLayoutSysFilterInput>;
  childrenContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterListInput>;
  childContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulLayoutSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  menue1?: InputMaybe<SortOrderEnum>;
  menue2?: InputMaybe<SortOrderEnum>;
  menue3?: InputMaybe<SortOrderEnum>;
  menue4?: InputMaybe<SortOrderEnum>;
  menue5?: InputMaybe<SortOrderEnum>;
  newsletterUeberschrift?: InputMaybe<SortOrderEnum>;
  newsletterText?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulLayoutSysSortInput>;
  childrenContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeSortInput>;
  childContentfulLayoutNewsletterTextTextNode?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulLayoutNewsletterTextTextNodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  newsletterText?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulLayoutNewsletterTextTextNodeSysSortInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
};

export type ContentfulLayoutNewsletterTextTextNodeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type ContentfulLayoutSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulLayoutSysContentTypeSortInput>;
};

export type ContentfulLayoutSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulLayoutSysContentTypeSysSortInput>;
};

export type ContentfulLayoutSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAdresseAdresseFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAdresseSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulAdresseSysContentTypeFilterInput>;
};

export type ContentfulAdresseSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulAdresseSysContentTypeSysFilterInput>;
};

export type ContentfulAdresseSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAdresseConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAdresseEdge>;
  nodes: Array<ContentfulAdresse>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAdresseGroupConnection>;
};


export type ContentfulAdresseConnectionDistinctArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseConnectionMaxArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseConnectionMinArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseConnectionSumArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAdresseFieldSelector;
};

export type ContentfulAdresseEdge = {
  next?: Maybe<ContentfulAdresse>;
  node: ContentfulAdresse;
  previous?: Maybe<ContentfulAdresse>;
};

export type ContentfulAdresseFieldSelector = {
  contentful_id?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  node_locale?: InputMaybe<FieldSelectorEnum>;
  adresse?: InputMaybe<ContentfulAdresseAdresseFieldSelector>;
  spaceId?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulAdresseSysFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ContentfulAdresseAdresseFieldSelector = {
  raw?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAdresseSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  revision?: InputMaybe<FieldSelectorEnum>;
  contentType?: InputMaybe<ContentfulAdresseSysContentTypeFieldSelector>;
};

export type ContentfulAdresseSysContentTypeFieldSelector = {
  sys?: InputMaybe<ContentfulAdresseSysContentTypeSysFieldSelector>;
};

export type ContentfulAdresseSysContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
  linkType?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAdresseGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAdresseEdge>;
  nodes: Array<ContentfulAdresse>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAdresseGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAdresseGroupConnectionDistinctArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseGroupConnectionMaxArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseGroupConnectionMinArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseGroupConnectionSumArgs = {
  field: ContentfulAdresseFieldSelector;
};


export type ContentfulAdresseGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAdresseFieldSelector;
};

export type ContentfulAdresseFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  adresse?: InputMaybe<ContentfulAdresseAdresseFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAdresseSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulAdresseSortInput = {
  contentful_id?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  node_locale?: InputMaybe<SortOrderEnum>;
  adresse?: InputMaybe<ContentfulAdresseAdresseSortInput>;
  spaceId?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulAdresseSysSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ContentfulAdresseAdresseSortInput = {
  raw?: InputMaybe<SortOrderEnum>;
};

export type ContentfulAdresseSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  revision?: InputMaybe<SortOrderEnum>;
  contentType?: InputMaybe<ContentfulAdresseSysContentTypeSortInput>;
};

export type ContentfulAdresseSysContentTypeSortInput = {
  sys?: InputMaybe<ContentfulAdresseSysContentTypeSysSortInput>;
};

export type ContentfulAdresseSysContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
  linkType?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
};

export type ContentfulUebermichTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulUebermichTextTextNodeEdge>;
  nodes: Array<ContentfulUebermichTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulUebermichTextTextNodeGroupConnection>;
};


export type ContentfulUebermichTextTextNodeConnectionDistinctArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeConnectionMaxArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeConnectionMinArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeConnectionSumArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulUebermichTextTextNodeFieldSelector;
};

export type ContentfulUebermichTextTextNodeEdge = {
  next?: Maybe<ContentfulUebermichTextTextNode>;
  node: ContentfulUebermichTextTextNode;
  previous?: Maybe<ContentfulUebermichTextTextNode>;
};

export type ContentfulUebermichTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulUebermichTextTextNodeEdge>;
  nodes: Array<ContentfulUebermichTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulUebermichTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulUebermichTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulUebermichTextTextNodeFieldSelector;
};


export type ContentfulUebermichTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulUebermichTextTextNodeFieldSelector;
};

export type ContentfulTerminButtonTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTerminButtonTextNodeEdge>;
  nodes: Array<ContentfulTerminButtonTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTerminButtonTextNodeGroupConnection>;
};


export type ContentfulTerminButtonTextNodeConnectionDistinctArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeConnectionMaxArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeConnectionMinArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeConnectionSumArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTerminButtonTextNodeFieldSelector;
};

export type ContentfulTerminButtonTextNodeEdge = {
  next?: Maybe<ContentfulTerminButtonTextNode>;
  node: ContentfulTerminButtonTextNode;
  previous?: Maybe<ContentfulTerminButtonTextNode>;
};

export type ContentfulTerminButtonTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTerminButtonTextNodeEdge>;
  nodes: Array<ContentfulTerminButtonTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTerminButtonTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulTerminButtonTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeGroupConnectionMaxArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeGroupConnectionMinArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeGroupConnectionSumArgs = {
  field: ContentfulTerminButtonTextNodeFieldSelector;
};


export type ContentfulTerminButtonTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTerminButtonTextNodeFieldSelector;
};

export type ContentfulTerminBeschreibungTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTerminBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulTerminBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTerminBeschreibungTextNodeGroupConnection>;
};


export type ContentfulTerminBeschreibungTextNodeConnectionDistinctArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeConnectionMaxArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeConnectionMinArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeConnectionSumArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};

export type ContentfulTerminBeschreibungTextNodeEdge = {
  next?: Maybe<ContentfulTerminBeschreibungTextNode>;
  node: ContentfulTerminBeschreibungTextNode;
  previous?: Maybe<ContentfulTerminBeschreibungTextNode>;
};

export type ContentfulTerminBeschreibungTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTerminBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulTerminBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulTerminBeschreibungTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulTerminBeschreibungTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeGroupConnectionMaxArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeGroupConnectionMinArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeGroupConnectionSumArgs = {
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};


export type ContentfulTerminBeschreibungTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulTerminBeschreibungTextNodeFieldSelector;
};

export type ContentfulStartbildTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStartbildTextTextNodeEdge>;
  nodes: Array<ContentfulStartbildTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulStartbildTextTextNodeGroupConnection>;
};


export type ContentfulStartbildTextTextNodeConnectionDistinctArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeConnectionMaxArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeConnectionMinArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeConnectionSumArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulStartbildTextTextNodeFieldSelector;
};

export type ContentfulStartbildTextTextNodeEdge = {
  next?: Maybe<ContentfulStartbildTextTextNode>;
  node: ContentfulStartbildTextTextNode;
  previous?: Maybe<ContentfulStartbildTextTextNode>;
};

export type ContentfulStartbildTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulStartbildTextTextNodeEdge>;
  nodes: Array<ContentfulStartbildTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulStartbildTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulStartbildTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulStartbildTextTextNodeFieldSelector;
};


export type ContentfulStartbildTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulStartbildTextTextNodeFieldSelector;
};

export type ContentfulSchwerpunktepostTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunktepostTextTextNodeEdge>;
  nodes: Array<ContentfulSchwerpunktepostTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunktepostTextTextNodeGroupConnection>;
};


export type ContentfulSchwerpunktepostTextTextNodeConnectionDistinctArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeConnectionMaxArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeConnectionMinArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeConnectionSumArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};

export type ContentfulSchwerpunktepostTextTextNodeEdge = {
  next?: Maybe<ContentfulSchwerpunktepostTextTextNode>;
  node: ContentfulSchwerpunktepostTextTextNode;
  previous?: Maybe<ContentfulSchwerpunktepostTextTextNode>;
};

export type ContentfulSchwerpunktepostTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunktepostTextTextNodeEdge>;
  nodes: Array<ContentfulSchwerpunktepostTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunktepostTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulSchwerpunktepostTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};


export type ContentfulSchwerpunktepostTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunktepostTextTextNodeFieldSelector;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunkteBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulSchwerpunkteBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunkteBeschreibungTextNodeGroupConnection>;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeConnectionDistinctArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeConnectionMaxArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeConnectionMinArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeConnectionSumArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeEdge = {
  next?: Maybe<ContentfulSchwerpunkteBeschreibungTextNode>;
  node: ContentfulSchwerpunkteBeschreibungTextNode;
  previous?: Maybe<ContentfulSchwerpunkteBeschreibungTextNode>;
};

export type ContentfulSchwerpunkteBeschreibungTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSchwerpunkteBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulSchwerpunkteBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSchwerpunkteBeschreibungTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeGroupConnectionMaxArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeGroupConnectionMinArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeGroupConnectionSumArgs = {
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};


export type ContentfulSchwerpunkteBeschreibungTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulSchwerpunkteBeschreibungTextNodeFieldSelector;
};

export type ContentfulNewsletterTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsletterTextTextNodeEdge>;
  nodes: Array<ContentfulNewsletterTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulNewsletterTextTextNodeGroupConnection>;
};


export type ContentfulNewsletterTextTextNodeConnectionDistinctArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeConnectionMaxArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeConnectionMinArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeConnectionSumArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};

export type ContentfulNewsletterTextTextNodeEdge = {
  next?: Maybe<ContentfulNewsletterTextTextNode>;
  node: ContentfulNewsletterTextTextNode;
  previous?: Maybe<ContentfulNewsletterTextTextNode>;
};

export type ContentfulNewsletterTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsletterTextTextNodeEdge>;
  nodes: Array<ContentfulNewsletterTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulNewsletterTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulNewsletterTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};


export type ContentfulNewsletterTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulNewsletterTextTextNodeFieldSelector;
};

export type ContentfulLeistungenpostTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenpostTextTextNodeEdge>;
  nodes: Array<ContentfulLeistungenpostTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenpostTextTextNodeGroupConnection>;
};


export type ContentfulLeistungenpostTextTextNodeConnectionDistinctArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeConnectionMaxArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeConnectionMinArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeConnectionSumArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};

export type ContentfulLeistungenpostTextTextNodeEdge = {
  next?: Maybe<ContentfulLeistungenpostTextTextNode>;
  node: ContentfulLeistungenpostTextTextNode;
  previous?: Maybe<ContentfulLeistungenpostTextTextNode>;
};

export type ContentfulLeistungenpostTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenpostTextTextNodeEdge>;
  nodes: Array<ContentfulLeistungenpostTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenpostTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLeistungenpostTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};


export type ContentfulLeistungenpostTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenpostTextTextNodeFieldSelector;
};

export type ContentfulLeistungenBeschreibungTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulLeistungenBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenBeschreibungTextNodeGroupConnection>;
};


export type ContentfulLeistungenBeschreibungTextNodeConnectionDistinctArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeConnectionMaxArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeConnectionMinArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeConnectionSumArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};

export type ContentfulLeistungenBeschreibungTextNodeEdge = {
  next?: Maybe<ContentfulLeistungenBeschreibungTextNode>;
  node: ContentfulLeistungenBeschreibungTextNode;
  previous?: Maybe<ContentfulLeistungenBeschreibungTextNode>;
};

export type ContentfulLeistungenBeschreibungTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeistungenBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulLeistungenBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeistungenBeschreibungTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLeistungenBeschreibungTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeGroupConnectionMaxArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeGroupConnectionMinArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeGroupConnectionSumArgs = {
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};


export type ContentfulLeistungenBeschreibungTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeistungenBeschreibungTextNodeFieldSelector;
};

export type ContentfulLayoutNewsletterTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLayoutNewsletterTextTextNodeEdge>;
  nodes: Array<ContentfulLayoutNewsletterTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLayoutNewsletterTextTextNodeGroupConnection>;
};


export type ContentfulLayoutNewsletterTextTextNodeConnectionDistinctArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeConnectionMaxArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeConnectionMinArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeConnectionSumArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};

export type ContentfulLayoutNewsletterTextTextNodeEdge = {
  next?: Maybe<ContentfulLayoutNewsletterTextTextNode>;
  node: ContentfulLayoutNewsletterTextTextNode;
  previous?: Maybe<ContentfulLayoutNewsletterTextTextNode>;
};

export type ContentfulLayoutNewsletterTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLayoutNewsletterTextTextNodeEdge>;
  nodes: Array<ContentfulLayoutNewsletterTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLayoutNewsletterTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLayoutNewsletterTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};


export type ContentfulLayoutNewsletterTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLayoutNewsletterTextTextNodeFieldSelector;
};

export type ContentfulKontaktBeschreibungTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulKontaktBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulKontaktBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulKontaktBeschreibungTextNodeGroupConnection>;
};


export type ContentfulKontaktBeschreibungTextNodeConnectionDistinctArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeConnectionMaxArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeConnectionMinArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeConnectionSumArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};

export type ContentfulKontaktBeschreibungTextNodeEdge = {
  next?: Maybe<ContentfulKontaktBeschreibungTextNode>;
  node: ContentfulKontaktBeschreibungTextNode;
  previous?: Maybe<ContentfulKontaktBeschreibungTextNode>;
};

export type ContentfulKontaktBeschreibungTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulKontaktBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulKontaktBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulKontaktBeschreibungTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulKontaktBeschreibungTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeGroupConnectionMaxArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeGroupConnectionMinArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeGroupConnectionSumArgs = {
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};


export type ContentfulKontaktBeschreibungTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulKontaktBeschreibungTextNodeFieldSelector;
};

export type ContentfulImpressumRechtlichesTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImpressumRechtlichesTextNodeEdge>;
  nodes: Array<ContentfulImpressumRechtlichesTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImpressumRechtlichesTextNodeGroupConnection>;
};


export type ContentfulImpressumRechtlichesTextNodeConnectionDistinctArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeConnectionMaxArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeConnectionMinArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeConnectionSumArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};

export type ContentfulImpressumRechtlichesTextNodeEdge = {
  next?: Maybe<ContentfulImpressumRechtlichesTextNode>;
  node: ContentfulImpressumRechtlichesTextNode;
  previous?: Maybe<ContentfulImpressumRechtlichesTextNode>;
};

export type ContentfulImpressumRechtlichesTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImpressumRechtlichesTextNodeEdge>;
  nodes: Array<ContentfulImpressumRechtlichesTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulImpressumRechtlichesTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulImpressumRechtlichesTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeGroupConnectionMaxArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeGroupConnectionMinArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeGroupConnectionSumArgs = {
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};


export type ContentfulImpressumRechtlichesTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulImpressumRechtlichesTextNodeFieldSelector;
};

export type ContentfulBlogpostTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogpostTextTextNodeEdge>;
  nodes: Array<ContentfulBlogpostTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogpostTextTextNodeGroupConnection>;
};


export type ContentfulBlogpostTextTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeConnectionMaxArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeConnectionMinArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeConnectionSumArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};

export type ContentfulBlogpostTextTextNodeEdge = {
  next?: Maybe<ContentfulBlogpostTextTextNode>;
  node: ContentfulBlogpostTextTextNode;
  previous?: Maybe<ContentfulBlogpostTextTextNode>;
};

export type ContentfulBlogpostTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogpostTextTextNodeEdge>;
  nodes: Array<ContentfulBlogpostTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogpostTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulBlogpostTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};


export type ContentfulBlogpostTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogpostTextTextNodeFieldSelector;
};

export type ContentfulBlogBeschreibungTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulBlogBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogBeschreibungTextNodeGroupConnection>;
};


export type ContentfulBlogBeschreibungTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeConnectionMaxArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeConnectionMinArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeConnectionSumArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};

export type ContentfulBlogBeschreibungTextNodeEdge = {
  next?: Maybe<ContentfulBlogBeschreibungTextNode>;
  node: ContentfulBlogBeschreibungTextNode;
  previous?: Maybe<ContentfulBlogBeschreibungTextNode>;
};

export type ContentfulBlogBeschreibungTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulBlogBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogBeschreibungTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulBlogBeschreibungTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeGroupConnectionMaxArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeGroupConnectionMinArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeGroupConnectionSumArgs = {
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};


export type ContentfulBlogBeschreibungTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulBlogBeschreibungTextNodeFieldSelector;
};

export type ContentfulAnfahrtBeschreibungTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnfahrtBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulAnfahrtBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAnfahrtBeschreibungTextNodeGroupConnection>;
};


export type ContentfulAnfahrtBeschreibungTextNodeConnectionDistinctArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeConnectionMaxArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeConnectionMinArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeConnectionSumArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};

export type ContentfulAnfahrtBeschreibungTextNodeEdge = {
  next?: Maybe<ContentfulAnfahrtBeschreibungTextNode>;
  node: ContentfulAnfahrtBeschreibungTextNode;
  previous?: Maybe<ContentfulAnfahrtBeschreibungTextNode>;
};

export type ContentfulAnfahrtBeschreibungTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnfahrtBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulAnfahrtBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAnfahrtBeschreibungTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAnfahrtBeschreibungTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeGroupConnectionMaxArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeGroupConnectionMinArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeGroupConnectionSumArgs = {
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};


export type ContentfulAnfahrtBeschreibungTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAnfahrtBeschreibungTextNodeFieldSelector;
};

export type ContentfulAktuellesBeschreibungTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAktuellesBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulAktuellesBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAktuellesBeschreibungTextNodeGroupConnection>;
};


export type ContentfulAktuellesBeschreibungTextNodeConnectionDistinctArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeConnectionMaxArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeConnectionMinArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeConnectionSumArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};

export type ContentfulAktuellesBeschreibungTextNodeEdge = {
  next?: Maybe<ContentfulAktuellesBeschreibungTextNode>;
  node: ContentfulAktuellesBeschreibungTextNode;
  previous?: Maybe<ContentfulAktuellesBeschreibungTextNode>;
};

export type ContentfulAktuellesBeschreibungTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAktuellesBeschreibungTextNodeEdge>;
  nodes: Array<ContentfulAktuellesBeschreibungTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAktuellesBeschreibungTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAktuellesBeschreibungTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeGroupConnectionMaxArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeGroupConnectionMinArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeGroupConnectionSumArgs = {
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};


export type ContentfulAktuellesBeschreibungTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAktuellesBeschreibungTextNodeFieldSelector;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  name?: InputMaybe<FieldSelectorEnum>;
  displayField?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  sys?: InputMaybe<ContentfulContentTypeSysFieldSelector>;
};

export type ContentfulContentTypeSysFieldSelector = {
  type?: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  name?: InputMaybe<SortOrderEnum>;
  displayField?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  sys?: InputMaybe<ContentfulContentTypeSysSortInput>;
};

export type ContentfulContentTypeSysSortInput = {
  type?: InputMaybe<SortOrderEnum>;
};

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
