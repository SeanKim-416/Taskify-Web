import classNames from 'classnames/bind';
import styles from './UserBadge.module.scss';

const cx = classNames.bind(styles);

/**
 * `UserBadgeProps는 사용자 칩 컴포넌트의 속성을 정의하는 타입입니다.`
 * 이 타입은 칩의 색상(color), 닉네임 첫 글자(text), 그리고 프로필 이미지(profileImageUrl)로 구성되어있습니다.
 *
 * @typeof {object} UserBadgeProps
 * @property {'orange' | 'pink' | 'brown' | 'sky'} color - 칩의 4가지 색상중 1개를 props로 내려받아 표시, 부모컴포넌트에서 칩의 색상을 랜덤으로 가져옴
 * @property {string} text - 사용자 닉네임의 첫글자를 칩의 정가운데에 표시
 * @property {string} profileImageUrl - 프로필이미지가 등록된 사용자의 경우 색상칩이 아닌 프로필이미지로 표시
 */

type UserBadgeProps = {
  color: 'orange' | 'pink' | 'brown' | 'sky';
  text: string;
  profileImageUrl?: string;
};

export default function UserBadge({
  color,
  text,
  profileImageUrl = '',
}: UserBadgeProps) {
  const firstWord = text.charAt(0);

  return (
    <div>
      {profileImageUrl ? (
        <img
          className={cx('Badge')}
          src={profileImageUrl}
          alt="프로필 이미지"
        />
      ) : (
        <div className={cx('Badge', color)}>
          <span className={cx('Badge-text')}>{firstWord}</span>
        </div>
      )}
    </div>
  );
}
