'use cleint';

import BodyFont from '@/common/Font/BodyFont';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  selectedPeriod: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PeriodRadioButton({
  selectedPeriod,
  handleChange,
}: Props) {
  const unselectedStyle = 'bg-white text-gray-500';
  const selectedStyle = 'bg-primary-50 text-black';

  const buttonClassName = `w-[64px] h-full rounded-lg  block py-2 cursor-pointer text-center hover:bg-primary-900 hover:text-white `;
  return (
    <div className="flex w-full flex-col justify-between gap-0.5">
      {['1일', '3개월', '1년', '3년', '10년'].map((label) => (
        <div key={uuidv4()}>
          <input
            type="radio"
            id={label}
            name="duration"
            value={label}
            checked={selectedPeriod === label}
            onChange={handleChange}
            style={{
              display: 'none',
            }}
          />
          <label
            htmlFor={label}
            className={` ${buttonClassName} ${
              selectedPeriod === label
                ? `${selectedStyle}`
                : `${unselectedStyle}`
            }`}
          >
            <BodyFont level="5" weight="medium">
              {label}
            </BodyFont>
          </label>
        </div>
      ))}
    </div>
  );
}
