import { Dimensions, FlexAlignType, PixelRatio } from 'react-native';

const BASELINE_HEIGHT = 812;
const BASELINE_WIDTH = 375;

type baseType = 'width' | 'height';

export type spacingProperty =
  | 'marginRight'
  | 'marginLeft'
  | 'paddingRight'
  | 'paddingLeft';

export type positionProperty = 'left' | 'right';

type layoutProperty =
  | 'row'
  | 'column'
  | 'flex-start'
  | spacingProperty
  | positionProperty
  | borderProperty;

export type borderProperty = 'borderLeftWidth' | 'borderRightWidth';

export type flexDirectionProperty =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'
  | undefined;

type logicalProperty =
  | flexDirectionProperty
  | spacingProperty
  | positionProperty
  | borderProperty
  | FlexAlignType
  | 'auto'
  | undefined;

const LOGICAL_LAYOUT_MAPPING = {
  row: 'row-reverse' as logicalProperty,
  column: 'column-reverse' as logicalProperty,
  'flex-start': 'flex-end' as logicalProperty,
  marginRight: 'marginLeft' as logicalProperty,
  marginLeft: 'marginRight' as logicalProperty,
  paddingRight: 'paddingLeft' as logicalProperty,
  paddingLeft: 'paddingRight' as logicalProperty,
  left: 'right' as logicalProperty,
  right: 'left' as logicalProperty,
  borderLeftWidth: 'borderRightWidth' as borderProperty,
  borderRightWidth: 'borderLeftWidth' as borderProperty,
};

/**
 * Calculate the percentage of the design width and height based on the design
 * - transform that percentage based on the actual device screen widths and heights
 * - round to the nearest pixel and return the value
 * @param size - the size from the design
 * @param based - what is the sized based on? width or height
 */
export const normalizeSizes = (size: number, based: baseType = 'width') => {
  const percentage =
    (size / (based === 'height' ? BASELINE_HEIGHT : BASELINE_WIDTH)) * 100;
  const { width: sWidth, height: sHeight } = Dimensions.get('window');
  const baseValue = based === 'width' ? sWidth : sHeight;

  return PixelRatio.roundToNearestPixel((baseValue * percentage) / 100);
};

export const getLogicalLayoutProperty = (
  property: layoutProperty,
  isRtl: boolean,
): logicalProperty => (isRtl ? LOGICAL_LAYOUT_MAPPING[property] : property);
