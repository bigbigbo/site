/*
 * @Name: 占位组件 
 * @Author: zhengxb 
 * @Date: 2018-09-12 12:08:45 
 * @Last Modified by: zhengxb
 * @Last Modified time: 2018-09-12 12:09:26
 */

import React from 'react';
import cx from 'classnames';

// styles
import styles from './styles/WhiteSpace.less';

type SizeType = 'default' | 'sm' | 'md' | 'lg';

interface IProps {
  size?: SizeType;
  className?: string;
}

const WhiteSpace = (props: IProps) => {
  const { size = 'default', className } = props;
  const classNames = cx(
    styles.suWhiteSpace,
    {
      [styles.suWhiteSpaceSm]: size === 'sm',
      [styles.suWhiteSpaceMd]: size === 'md',
      [styles.suWhiteSpaceLg]: size === 'lg'
    },
    className
  );

  return <div className={classNames} />;
};

export default WhiteSpace;
