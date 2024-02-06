import { motion } from "framer-motion";
import { generateClasses } from "@/utils/styling";
import Clock from "react-live-clock";

type Props = {
  location: string;
  street: string;
  suburb: string;
  city: string;
  timezone: string;
};

const LocationCard = (props: Props) => {
  const { location, street, suburb, city, timezone } = props;

  return (
    <motion.div
      className={generateClasses({
        generic: ['flex', 'flex-col', 'justify-center'],
        mobile: [
          'w-full',
          'min-h-[130px]',
          'gap-4'
        ],
        web: [],
      })}
    >
      <motion.div
        style={{ width: '100%' }}
        className={generateClasses({
          generic: ['flex', 'justify-between', 'items-center', 'mx-auto', 'w-full'],
          mobile: [
            
          ],
          web: [],
        })}
      >
        <p
          className={generateClasses({
            generic: ["text-c-heading"],
            mobile: ["font-bold", "text-[1rem]"],
            web: [
              "desktop:text-[1.4rem]"
            ],
          })}
        >
          {location}
        </p>
        <Clock
          format={"hh:mma"}
          ticking={true}
          timezone={timezone}
          className={generateClasses({
            generic: ["text-c-subtext"],
            mobile: ["text-[1rem]"],
            web: [
              "desktop:text-[1.4rem]"
            ],
          })}
        />
      </motion.div>
      <div>
        <p
          className={generateClasses({
            generic: ["text-c-subtext"],
            mobile: ['text-[0.8rem]'],
            web: [
              "desktop:text-[1.2rem]"
            ],
          })}
        >
          {street}
        </p>
        <p
          className={generateClasses({
            generic: ["text-c-subtext"],
            mobile: ['text-[0.8rem]'],
            web: [
              "desktop:text-[1.2rem]"
            ],
          })}
        >
          {suburb}
        </p>
        <p
          className={generateClasses({
            generic: ["text-c-subtext"],
            mobile: ['text-[0.8rem]'],
            web: [
              "desktop:text-[1.2rem]"
            ],
          })}
        >
          {city}
        </p>
      </div>
    </motion.div>
  );
};

export default LocationCard;
