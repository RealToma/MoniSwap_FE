import { useMemo, type ReactNode, Children, useEffect, ReactElement, cloneElement } from "react";

interface StepProps {
  active?: boolean;
  content: ReactNode;
  customIcon?: ReactNode;
  hasConnector?: boolean;
}

interface StepGroupProps {
  activeStep: number;
  children: ReactNode;
}

function Step({ active, content, customIcon, hasConnector }: StepProps) {
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <div className="flex flex-col justify-start items-center">
        <div
          className={`flex justify-center items-center py-2 px-2 rounded-[10px] bg-[#47473f] h-8 w-8 md:h-10 md:w-10 text-center ${
            active ? "text-[#34d22c]" : "text-[#fff] font-[500] text-sm md:text-lg italic"
          }`}
        >
          {customIcon}
        </div>
        {hasConnector && <div className="w-[1px] bg-[#9a9888] min-h-7 md:min-h-8" />}
      </div>
      <div className="text-justify flex justify-start items-center w-auto">{content}</div>
    </div>
  );
}

function StepGroup({ activeStep = -1, children }: StepGroupProps) {
  const groupMembers = useMemo(() => Children.toArray(children), [children]);

  useEffect(() => {
    groupMembers.forEach(member => {
      if ((member as ReactElement).type !== Step) {
        throw new TypeError(
          `unsupported element in StepGroup. expected a 'Step' but found ${typeof (member as ReactElement).type}`
        );
      }
    });
  }, [groupMembers]);

  return (
    <ul className="flex flex-col justify-start items-start">
      {groupMembers.map((x, index) => (
        <li key={index}>
          {cloneElement(x as ReactElement, {
            active: index === activeStep,
            customIcon: (x as ReactElement).props.customIcon ?? <span>{index + 1}</span>,
            hasConnector: index < groupMembers.length - 1,
            key: index
          })}
        </li>
      ))}
    </ul>
  );
}

export { Step, StepGroup };
