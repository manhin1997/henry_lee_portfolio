import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Modal,
  useDisclosure,
  ModalHeader,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { subtitle, title } from "@/components/primitives";
import ImageGallery from "react-image-gallery";
import "./works.scss";

interface CardProps {
  img: string;
  title: string;
  des: React.ReactNode;
  clickInfo: {
    title: string;
    imgs: string[];
  };
}

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onOpen: () => void;
}

const CardList: CardProps[] = [
  {
    img: "/work/olpp/olpp_1.webp",
    title: "PolyU Online Payment Portal",
    des: (
      <>
        <div className="text-center">
          A centralized online payment platform for different university
          applications to process payments through different Payment Channels,
          which includes:
        </div>
        <div className="text-left">
          • a web app that processes student payments
          <br />
          • a web app for Finance Office users to maintain and create different
          payment events / journal postings.
          <br />
          • a payment gateway for processing transactions via different payment
          methods
          <br />
        </div>
      </>
    ),
    clickInfo: {
      title: "PolyU Online Payment Portal",
      imgs: [
        "/work/olpp/olpp_1.webp",
        "/work/olpp/olpp_2.webp",
        "/work/olpp/olpp_3.webp",
        "/work/olpp/olpp_4.webp",
        "/work/olpp/olpp_5.webp",
      ],
    },
  },
  {
    img: "/work/autoinsight/auto_1.webp",
    title: "AutoInsight",
    des: "An easy-to-use platform for e-commerce to visualize via graphs and charts without the hassle of setting up custom columns.",
    clickInfo: {
      title: "AutoInsight",
      imgs: ["/work/autoinsight/auto_1.webp"],
    },
  },
  {
    img: "/work/neurogym/neurogym_home.webp",
    title: "Neurogym",
    des: "A gamified cognitive training platform that offered a series of interesting and interactive personalized training to help monitor user's cognitive performance.",
    clickInfo: {
      title: "Neurogym",
      imgs: [
        "/work/neurogym/neurogym_dailymission.webp",
        "/work/neurogym/neurogym_home.webp",
        "/work/neurogym/neurogym_minigame.webp",
        "/work/neurogym/neurogym_training.webp",
      ],
    },
  },
  {
    img: "/work/hkhs/hkhs_home.webp",
    title: "Hong Kong Housing Society - Elderly Care Program",
    des: "Utilizes various mini-games and activities, such as karaoke, pushing gravity balls, and solving arithmetic problems, to help volunteers interact and communicate with the elderly.",
    clickInfo: {
      title: "Hong Kong Housing Society",
      imgs: [
        "/work/hkhs/hkhs_ballgame.webp",
        "/work/hkhs/hkhs_home.webp",
        "/work/hkhs/hkhs_karaoke.webp",
        "/work/hkhs/hkhs_sumgame.webp",
      ],
    },
  },
  {
    img: "/work/btb/btb_dance.webp",
    title: '"Beat the Beats" - a rhythm recognition game',
    des: "A rhythm game that uses motion tracking to track dance moves via an Android App.",
    clickInfo: {
      title: `"Beat the Beats" - a rhythm recognition game`,
      imgs: ["/work/btb/btb_dance.webp", "/work/btb/btb_home.webp"],
    },
  },
  {
    img: "/work/tbc/tbc_game.webp",
    title: "Monster Gem - a real-time strategy game",
    des: "A real-time strategy game that has some turn based combat element within, implemented using state machines.",
    clickInfo: {
      title: "Monster Gem - a real-time strategy game",
      imgs: [
        "/work/tbc/tbc_game.webp",
        "/work/tbc/tbc_home.webp",
        "/work/tbc/tbc_win.webp",
      ],
    },
  },
];

const Works: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [openCard, setOpenCard] = useState<CardProps>(CardList[0]);

  return (
    <div className="works" id="works">
      <h1 className={title({ class: "title-port p-8 block" })}>
        Previous Works
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-4">
        {CardList.map((card, index) => (
          <WorkCard
            key={index}
            card={card}
            modal={{ isOpen, onOpen, onOpenChange }}
            setOpenCard={setOpenCard}
          />
        ))}
      </div>
      <WorkModal card={openCard} modal={{ isOpen, onOpen, onOpenChange }} />
    </div>
  );
};

const WorkCard: React.FC<{
  card: CardProps;
  modal: ModalProps;
  setOpenCard: (card: CardProps) => void;
}> = ({ card, modal, setOpenCard }) => {
  return (
    <Card
      shadow="sm"
      key={card.title}
      isPressable
      onPress={() => {
        setOpenCard(card);
        modal.onOpen();
      }}
    >
      <CardBody className="overflow-visible p-0 flex-grow-0">
        <Image
          alt={`${card.title} front image`}
          className="image"
          src={card.img}
          width="100%"
          shadow="sm"
          radius="lg"
        />
      </CardBody>
      <CardHeader className="p-1 flex-grow-0">
        <div className={subtitle({ size: "xs", class: "w-auto" })}>
          {card.title}
        </div>
      </CardHeader>
      <CardFooter className="text-small flex-grow text-">
        <p className="text-default-500 self-start">{card.des}</p>
      </CardFooter>
    </Card>
  );
};

const WorkModal: React.FC<{ card: CardProps; modal: ModalProps }> = ({
  card,
  modal,
}) => {
  return (
    <Modal
      className="max-w-[90%] max-h-[90%]"
      isOpen={modal.isOpen}
      placement={"center"}
      onOpenChange={modal.onOpenChange}
    >
      <ModalContent>
        {(_) => (
          <>
            <ModalHeader>{card.clickInfo.title}</ModalHeader>
            <ModalBody>
              <ImageGallery
                items={card.clickInfo.imgs.map((img) => ({
                  original: img,
                  thumbnail: img,
                }))}
                lazyLoad={false}
              />
            </ModalBody>{" "}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Works;
