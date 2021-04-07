const Members = (selfName: string, members: string[]) =>
    <div>
        <SelfMember name="corsin"/>
        {members.map(n => <Member name={n}/>)}
    </div>


interface MemberProps {
    name: string,
}

const Member = (props: MemberProps) =>
    <div className="member">
        <div className="name">{props.name}</div>
    </div>

const SelfMember = (props: MemberProps) =>
    <div className="member" style={{backgroundColor: "#37465c"}}>
        <div className="name">
            {props.name}
        </div>
    </div>

export default Members;