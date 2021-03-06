<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Role for use type event
 * @ORM\Entity(repositoryClass="App\Repository\RoleTypeEventRepository")
 */
class RoleTypeEvent
{
    /**
     * ID role of type event
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"event_type"})
     */
    private $id;

    /**
     * Event type with role
     * @ORM\OneToOne(targetEntity="App\Entity\EventType", inversedBy="roleTypeEvent", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $eventType;

    /**
     * If teacher authorized
     * @ORM\Column(type="boolean", nullable=true)
     * @Assert\Type("boolean")
     * @Groups({"event_type"})
     */
    private $teacher;

    /**
     * If tutor authorized
     * @ORM\Column(type="boolean", nullable=true)
     * @Assert\Type("boolean")
     * @Groups({"event_type"})
     */
    private $tutor;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEventType(): ?EventType
    {
        return $this->eventType;
    }

    public function setEventType(EventType $eventType): self
    {
        $this->eventType = $eventType;

        return $this;
    }

    public function getTeacher(): ?bool
    {
        return $this->teacher;
    }

    public function setTeacher(?bool $teacher): self
    {
        $this->teacher = $teacher;

        return $this;
    }

    public function getTutor(): ?bool
    {
        return $this->tutor;
    }

    public function setTutor(bool $tutor): self
    {
        $this->tutor = $tutor;

        return $this;
    }
}
