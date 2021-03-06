<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AttachmentEventRepository")
 */
class AttachmentEvent
{
    /**
     * Id attachment
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"session_detail", "events", "attachment"})
     */
    private $id;

    /**
     * event relation attachment
     * @ORM\ManyToOne(targetEntity="App\Entity\Event", inversedBy="attachmentEvents")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"attachment"})
     */
    private $event;

    /**
     * Source string for download attachment
     * @ORM\Column(type="string", length=255)
     * @Assert\LessThanOrEqual(255)
     * @Assert\NotBlank()
     * @Groups({"session_detail", "events", "attachment"})
     */
    private $source;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"session_detail", "events", "attachment"})
     */
    private $size;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"session_detail", "events", "attachment"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @Groups({"session_detail", "events", "attachment"})
     */
    private $extension;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEvent(): ?Event
    {
        return $this->event;
    }

    public function setEvent(?Event $event): self
    {
        $this->event = $event;

        return $this;
    }

    public function getSource(): ?string
    {
        return $this->source;
    }

    public function setSource(string $source): self
    {
        $this->source = $source;

        return $this;
    }

    public function getSize(): ?float
    {
        return $this->size;
    }

    public function setSize(?float $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function setExtension(?string $extension): self
    {
        $this->extension = $extension;

        return $this;
    }
}
