//Component made by Ivan Crescenti
import Tree from "./Tree";
import TreeNode from "./TreeNode";

const TreeView = (props) => {
	
	const demo_data = {
		content: "Company",
		items: [
			{
				content: "Sales",
				items: [
					{
						content: "operari 1"
					},
					{
						content: "operari 2"
					},
					{
						content: "operari 3"
					},
				]
			},
			{
				content: "Production",
				items: [
					{
						content: "Warehouse 1",
						items: [
							{
								content: "warehouse 1"
							},
							{
								content: "warehouse 2"
							},
							{
								content: "warehouse 3"
							}
						]
					},
					{
						content: "Warehouse 2",
						items: [
							{
								content: "warehouse 1"
							},
							{
								content: "warehouse 2"
							},
							{
								content: "warehouse 3"
							}
						]
					},
					{
						content: "Warehouse 3",
						items: [
							{
								content: "warehouse 1"
							},
							{
								content: "warehouse 2"
							},
							{
								content: "warehouse 3"
							}
						]
					},
				]
			},
			{
				content: "Administration",
				items: [
					{
						content: "Logisitcs manager"
					},
					{
						content: "IT guy"
					},
					{
						content: "Accountants",
						items: [
							{
								content: "Accountant 1"
							},
							{
								content: "Accountant 2"
							}
						]
					}
				]
			}
		]
	}

	const NodeContent = (props) => <div style={{padding: '10px', marginLeft: '10px',marginRight: '10px', borderRadius: '8px', display: 'inline-block', border: '1px solid black'}}>
		{props.node.content}
	</div>

	//Generate node
	function recursiveGeneration(node) {
		if (node.content == undefined) {
			return null;
		}
	
		return (
			<TreeNode
				label={<StyledNode>
					<NodeContent node={node}/>
				</StyledNode>}
			>
				{!node.items ?null :node.items.map(child => recursiveGeneration(child))}
			</TreeNode>
		);
	}

	const StyledNode = ({ children }) => <div>
		{children}
	</div>;

	//Render
	return <div>
		<Tree
			lineWidth={'2px'}
			lineColor={'blue'}
			lineStyle={'solid'}
			lineBorderRadius={'10px'}
			label={<NodeContent node={props?.data || demo_data}/>}
		>
			{(props.data?.items || demo_data.items).map(item => 
				recursiveGeneration(item)
			)}
			
		</Tree>
	</div>
};

export default TreeView;

