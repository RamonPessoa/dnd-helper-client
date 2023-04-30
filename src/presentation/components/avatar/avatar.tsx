import Image from "next/image";

interface AvatarProps {
  src: string;
}

export default function Avatar({ src }: AvatarProps) {
  return (
      <Image className="rounded-full border-2 border-green-400" src={src} alt="avatar" width={170} height={170}/>
  );
}
