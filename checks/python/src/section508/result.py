from dataclasses import dataclass, field


@dataclass
class Failure:
    id: str
    title: str
    details: list[str] = field(default_factory=list)


@dataclass
class Result:
    ok: bool
    failures: list[Failure] = field(default_factory=list)

    def report(self) -> str:
        lines = []
        for failure in self.failures:
            lines.append(f"{failure.id}: {failure.title}")
            for detail in failure.details:
                lines.append(f"  {detail}")
        return "\n".join(lines)
