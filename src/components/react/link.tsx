
interface LinkProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    to?: string;
    target?: string;
}

export const Link = ({ href, target, children }: LinkProps) => {
    // const [isOpen, setOpen] = useState(false);

    return (
        <a href={href} target={target}>
            {children}
        </a>
    );
};
